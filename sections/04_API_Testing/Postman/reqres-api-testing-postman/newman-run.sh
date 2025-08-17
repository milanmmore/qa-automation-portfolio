#!/bin/bash

# Name of the collection file (exported from Postman)
COLLECTION="/collecttions/reqres-collection.json"

# Optional environment file (if you use variables)
ENVIRONMENT="/environments/reqres-environment.json"

# Output directory for reports
REPORT_DIR="/reports/newman-reports"

# Create report directory if it doesn't exist
mkdir -p "$REPORT_DIR"

# Run the collection using Newman
newman run "$COLLECTION" \
  --environment "$ENVIRONMENT" \
  --reporters cli,html,json \
  --reporter-html-export "$REPORT_DIR/report.html" \
  --reporter-json-export "$REPORT_DIR/report.json"

echo "✅ Newman run complete. Reports saved in $REPORT_DIR"
