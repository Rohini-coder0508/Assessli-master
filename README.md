Assessli Contact Form

Overview
Assessli Contact Form is a simple React application for submitting contact information to a Google Apps Script. This project utilizes Chakra UI for styling and Axios for making HTTP requests.

Table of Contents
Installation
Usage
Configuration

Installation
Clone the repository: 
git clone https://github.com/your-username/assessli-contact-form.git
Navigate to the project directory:
cd assessli-contact-form
Install dependencies: 
npm install
Usage
Start the development server:
    npm run client
Open your web browser and go to http://localhost:8080 or make it 8081 according to the console of VS Code / Code Editor to view the application.

Fill out the contact form and click the "Submit" button to submit the information.

Configuration
Google Apps Script
To configure the Google Apps Script backend, follow these steps:

Open your Google Apps Script project.

Update the doPost function to handle the form submission.

Deploy the script as a web app and obtain the deployment URL.

Update the frontend application with the deployment URL (Update the fetch URL in App.jsx).
