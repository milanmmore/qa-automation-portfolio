Feature: Add Place Validations

    Scenario: Verify if place is being Successfully added using Add Place API
      Given I have add Place Payload
      When user calls "ADD_PLACE_API" with "POST" HTTP request
      Then the API call got success with status code 200
      And "status" in response body is "OK"
      And "scope" in response body is "APP"
      And "place_id" in response body is "not null"