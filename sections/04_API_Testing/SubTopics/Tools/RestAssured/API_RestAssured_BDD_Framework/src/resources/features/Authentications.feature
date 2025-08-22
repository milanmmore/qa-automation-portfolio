Feature: Add Place Validations

    Scenario: Verify if place is being Successfully added using Add Place API
      Given I have "PLACE_ID" to get Place details
      When user calls "GET_PLACE_API" with "GET" HTTP request
      Then the API call got success with status code 200
      And "status" in response body is "OK"