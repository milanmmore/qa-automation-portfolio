Feature: Delete Place Validations

    Scenario: Verify if place is being Successfully deleted using Delete Place API
      Given I have "DELETE_PLACE" Payload
      When user calls "DELETE_PLACE_API" with "DELETE" HTTP request
      Then the API call got success with status code 200
      And "status" in response body is "OK"
      And "message" in response body is "Place successfully deleted"