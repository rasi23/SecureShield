🚀 Phishing URL Detection

 ![image1]
 ![image1]
🎯 Objective

Phishing websites are a common social engineering threat that mimic legitimate URLs and web pages to deceive users. This project focuses on:

1. Training Machine Learning (ML) models and Deep Neural Networks to detect phishing websites.

2. Collecting a dataset of both benign and phishing URLs and extracting essential features.

3. Evaluating model performance and selecting the best one for prediction.

⚙️ Installation

Clone this repository and install the required dependencies:

pip install -r requirements.txt

🛠️ Technologies Used
## 🛠️ Technologies & Tools

### Programming Languages
[![My Skills](https://skillicons.dev/icons?i=python,html,css,js)](https://skillicons.dev)

### Libraries
[![My Skills](https://skillicons.dev/icons?i=scikit-learn,pandas,numpy)](https://skillicons.dev)
<img src="https://img.shields.io/badge/XGBoost-0094C6?style=for-the-badge&logo=xgboost&logoColor=white">
<img src="https://img.shields.io/badge/SHAP-FF5733?style=for-the-badge&logo=python&logoColor=white">

### Tools
[![My Skills](https://skillicons.dev/icons?i=flask)](https://skillicons.dev)
<img src="https://img.shields.io/badge/BeautifulSoup-4B8BBE?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/GoogleSearchAPI-4285F4?style=for-the-badge&logo=google&logoColor=white">

🔍 Feature Extraction

The detection process involves:

1. URL Collection: URLs are collected from user input on a web page.

2. Feature Extraction: Key attributes from the domain, HTML content, and address bar are analyzed.

3. Model Training: ML models are trained on these extracted features to classify URLs as phishing or legitimate.

📊 Machine Learning Models

The following ML models were evaluated, and the best-performing model was selected for phishing detection:
#
|             Model            | Accuracy | F1 Score | Recall | Precision |
|:----------------------------:|:--------:|:--------:|:------:|:---------:|
| Gradient Boosting Classifier | 97.4%    | 0.977    | 0.994  | 0.986     |
| CatBoost Classifier          | 97.2%    | 0.975    | 0.994  | 0.989     |
| Multi-layer Perceptron       | 96.9%    | 0.973    | 0.995  | 0.981     |
| Random Forest                | 96.7%    | 0.971    | 0.993  | 0.990     |
| Support Vector Machine       | 96.4%    | 0.968    | 0.980  | 0.965     |
| Logistic Regression          | 93.4%    | 0.941    | 0.943  | 0.927     |
| Naive Bayes Classifier       | 60.5%    | 0.454    | 0.292  | 0.997     |

📌 Refer to Phishingproject.ipynb for detailed implementation and insights.

📌 Conclusion

🔹 Various ML models were tested to identify the most accurate phishing detection approach.

🔹 Exploratory Data Analysis (EDA) provided insights into critical phishing features.

🔹 Features like HTTPS presence, Anchor URL, and Website Traffic play a crucial role in detecting phishing attempts.

🔹 Gradient Boosting Classifier achieved 97.4% accuracy, making it the most effective model for phishing URL detection.

🔹 This project enhances cybersecurity by reducing malicious URL threats through AI-powered detection!