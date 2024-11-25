#!/bin/bash

# Test POST request to /calculate
echo "Running test for /calculate endpoint..."
response=$(curl -s -X POST http://localhost:3000/calculate -d "number=5")

# Expected output
expected_output="<h1>The square of 5 is 25</h1>"

if [[ "$response" == *"$expected_output"* ]]; then
  echo "Test Passed: Correct response received!"
  exit 0
else
  echo "Test Failed: Response does not match expected output."
  exit 1
fi