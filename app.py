# Importing required libraries
from flask import Flask, request, jsonify, send_from_directory
import numpy as np
import warnings
import pickle
from feature import FeatureExtraction
from flask_cors import CORS
import re
import os
import traceback

# Suppress warnings
warnings.filterwarnings('ignore')

# Load the model using a context manager to ensure file closure
with open("newmodel.pkl", "rb") as file:
    gbc = pickle.load(file)

# Initialize the Flask app
app = Flask(__name__, static_folder="../frontend/dist", static_url_path="/")
CORS(app, resources={r"/*": {"origins": "*"}})  # Enable CORS

# Serve React frontend
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
    if path and os.path.exists(app.static_folder + "/" + path):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, "index.html")

# API route to check if a URL is safe or phishing
@app.route('/api/check-url', methods=['POST'])
def api_check_url():
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
            "risk_score": round(risk_score, 2)
        }), 200

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": "An error occurred while processing the URL.", "details": str(e)}), 500

# API route for feedback submission
@app.route('/api/submit-feedback', methods=['POST'])
def submit_feedback():
    try:
        data = request.get_json()
        feedback = data.get("feedback")
        rating = data.get("rating")

        if not feedback or not rating:
            return jsonify({"error": "Missing feedback or rating in request."}), 400

        # Log feedback
        with open("feedback.log", "a") as f:
            f.write(f"Feedback: {feedback}, Rating: {rating}\n")

        return jsonify({"message": "Feedback received successfully"}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "Failed to submit feedback"}), 500

# Run the application
if __name__ == "__main__":
    app.run(debug=True)
