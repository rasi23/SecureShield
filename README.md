
# 🛡️SecureShield🛡️
Advanced Phishing Detection Tool Created Using ML and Deep Learning
![Project Image](image1)
![Project Image](image2)

## 🎯 Objective
Phishing websites pose a significant cybersecurity threat by mimicking legitimate websites to deceive users. This project aims to develop a robust system for phishing URL detection by:

1. Leveraging Machine Learning (ML) models and Deep Neural Networks to classify phishing websites.
2. Collecting and preprocessing datasets comprising both legitimate and phishing URLs.
3. Extracting essential features from URLs to train ML models.
4. Evaluating various ML algorithms to select the most accurate model for phishing detection.

## ⚙️ Installation

To set up the project locally, clone the repository and install the necessary dependencies:

```bash
pip install -r requirements.txt
```

## 🛠️ Technologies & Tools

### Programming Languages
![My Skills](https://skillicons.dev/icons?i=py,pkl,js,&perline=5)
### Libraries/Frameworks
![My Skills](https://skillicons.dev/icons?i=vite,nodejs,git,vscode,&perline=10)

### Tools
![My Skills](https://skillicons.dev/icons?i=tensorflow,sklearn,vue&perline=10)

## 🔍 Feature Extraction

The phishing detection process is divided into the following stages:

1. **URL Collection**: Collecting URLs through user input on a web interface.
2. **Feature Extraction**: Analyzing URL attributes such as domain information, HTML content, and address bar features.
3. **Model Training**: Training ML models on extracted features to classify URLs as phishing or legitimate.

## 📊 Machine Learning Models

The following ML models were evaluated, and their performance was compared:

| Model                     | Accuracy | F1 Score | Recall | Precision |
|----------------------------|----------|----------|-------|----------|
| Gradient Boosting Classifier | 97.4%   | 0.977   | 0.994 | 0.986    |
| CatBoost Classifier        | 97.2%   | 0.975   | 0.994 | 0.989    |
| Multi-layer Perceptron     | 96.9%   | 0.973   | 0.995 | 0.981    |
| Random Forest             | 96.7%   | 0.971   | 0.993 | 0.990    |
| Support Vector Machine     | 96.4%   | 0.968   | 0.980 | 0.965    |
| Logistic Regression        | 93.4%   | 0.941   | 0.943 | 0.927    |
| Naive Bayes Classifier     | 60.5%   | 0.454   | 0.292 | 0.997    |

For detailed implementation, refer to **Phishingproject.ipynb**.

**The bar graph comparing the performance of different machine learning models based on Accuracy, F1-score, Recall, and Precision.**
![Project Image]([image3](https://github.com/rasi23/SecureShield/blob/main/image3.png)) 

## 📌 Conclusion

- Multiple ML models were explored to identify the most accurate phishing detection method.
- Exploratory Data Analysis (EDA) revealed key features like HTTPS presence, Anchor URL, and Website Traffic as crucial indicators of phishing attempts.
- The **Gradient Boosting Classifier** demonstrated the highest accuracy of **97.4%**, making it the most effective model for phishing URL detection.
- This AI-powered solution significantly enhances cybersecurity by mitigating the risk of malicious URL-based attacks.

💡 Future Enhancements
- Expand the dataset to include more phishing techniques (e.g., SMS phishing, voice phishing).
- Develop a browser extension for real-time phishing detection.
- Incorporate user feedback to continuously improve the model.

## 💪 Contribution
Contributions are welcome! Feel free to raise issues or submit pull requests to improve the project.

## 📄 License
This project is licensed under the [MIT License](LICENSE).

## 🌐 Connect
Let's connect on LinkedIn and GitHub!

[![My Skills](https://skillicons.dev/icons?i=linkedin&perline=1)](https://www.linkedin.com/in/rasindu-vimansha/)

---

### Made with ❤️ by Rasindu Illangarathne



