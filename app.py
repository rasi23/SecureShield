# Importing required libraries
from flask import Flask, request, render_template, jsonify
import numpy as np
import warnings
import pickle
from convert import convertion
from feature import FeatureExtraction
from flask_cors import CORS
import re
import traceback

# Suppress warnings
warnings.filterwarnings('ignore')

# Load the model using a context manager to ensure file closure
with open("newmodel.pkl", "rb") as file:
    gbc = pickle.load(file)

# Initialize the Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow CORS for all routes to support cross-origin requests

# Route for the home page
@app.route("/")
def home():
    return render_template("index.html")

# Route to handle URL scanning and prediction via the web form
@app.route('/result', methods=['POST', 'GET'])
def predict():
    if request.method == "POST":
        try:
            # Extract the URL input
            url = request.form.get("name")
            if not url or not re.match(r'^https?://', url):
                return render_template("index.html", error="Please enter a valid URL that starts with http:// or https://")

            # Extract features from the URL
            obj = FeatureExtraction(url)
            x = np.array(obj.getFeaturesList()).reshape(1, 30)

            # Predict using the loaded model
            y_pred = gbc.predict(x)[0]

            # Convert prediction to a human-readable format
            name = convertion(url, int(y_pred))

            # Return the result to index.html
            return render_template("index.html", name=name)

        except Exception as e:
            # Log the error and show a friendly message
            traceback.print_exc()  # Prints the exception stack trace to the console
            return render_template("index.html", error="An error occurred while processing the URL. Please try again.")

# API route to handle URL scanning and prediction
@app.route('/api/check-url', methods=['POST'])
def api_check_url():
    """
    API endpoint to check if a URL is safe or phishing.
    Expects JSON input with a 'url' key.
    """
    try:
        # Parse JSON data
        data = request.json
        if not data or "url" not in data:
            return jsonify({"error": "No URL provided. Please include a 'url' key in your JSON request."}), 400

        url = data["url"]
        if not re.match(r'^https?://', url):
            return jsonify({"error": "Invalid URL format. Ensure the URL starts with http:// or https://"}), 400

        # Extract features from the URL
        obj = FeatureExtraction(url)
        x = np.array(obj.getFeaturesList()).reshape(1, 30)

        # Predict using the loaded model
        y_pred = gbc.predict(x)[0]

        # Convert prediction to a human-readable format
        risk_score = np.max(gbc.predict_proba(x)) * 100  # Calculate a risk score based on model confidence
        is_phishing = bool(y_pred)

        return jsonify({
            "url": url,
            "is_phishing": is_phishing,
            "risk_score": round(risk_score, 2)  # Rounding the risk score to two decimal places
        }), 200

    except Exception as e:
        # Log the error and return a JSON error response
        traceback.print_exc()
        return jsonify({"error": "An error occurred while processing the URL. Please try again.", "details": str(e)}), 500

# Route to render the use cases page
@app.route('/usecases', methods=['GET'])
def usecases():
    return render_template('usecases.html')

# API route for feedback submission
@app.route('/api/submit-feedback', methods=['POST'])
def submit_feedback():
    """
    API endpoint to submit user feedback.
    Expects JSON input with 'feedback' and 'rating' keys.
    """
    try:
        # Extract feedback data from the request
        data = request.get_json()
        feedback = data.get("feedback")
        rating = data.get("rating")

        if not feedback or not rating:
            return jsonify({"error": "Missing feedback or rating in request."}), 400

        # Log the feedback (or save it to a database/file)
        with open("feedback.log", "a") as f:
            f.write(f"Feedback: {feedback}, Rating: {rating}\n")

        return jsonify({"message": "Feedback received successfully"}), 200
    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({"error": "Failed to submit feedback"}), 500

# Run the application
if __name__ == "__main__":
    app.run(debug=True)
