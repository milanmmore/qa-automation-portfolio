# Reqres API Testing with Postman & Newman

This project demonstrates API testing using Postman and Newman with the Reqres demo API.

## 🔧 Features

- GET and POST endpoints
- Data-driven testing with `users_data.json`
- Environment variables
- HTML reporting with `htmlextra`
- CI integration using GitHub Actions

## 🚀 Run Locally

```bash
newman run collections/reqres_collection.json \
  -e environments/reqres_environment.json \
  --iteration-data data/users_data.json \
  -r htmlextra \
  --reporter-htmlextra-export Reports/report.html
```

## 📁 Folder Structure

```
reqres-api-testing-postman/
├── collections/
│   └── reqres_collection.json
├── environments/
│   └── reqres_environment.json
├── data/
│   └── users_data.json
├── .github/
│   └── workflows/
│       └── newman.yml
├── README.md
```

## 🔄 CI/CD

Push to main triggers GitHub Actions to run tests and generate reports.

## 📹 YouTube Tutorial

Coming soon: [Your Channel Link]
