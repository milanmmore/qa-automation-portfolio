package stepDefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddPlace_StepDefinition {

    @Given("I have add Place Payload")
    public void i_have_add_place_payload() {
        // Write code here that turns the phrase above into concrete actions
    }
    @When("user calls {string} with {string} HTTP request")
    public void user_calls_with_post_http_request(String resource, String method ) {
        // Write code here that turns the phrase above into concrete actions
    }
    @Then("the API call got success with status code 200")
    public void the_api_call_got_success_with_status_code_200() {
        // Write code here that turns the phrase above into concrete actions
    }

    @And("{string} in response body is {string}")
    public void in_response_body_is(String string, String string2) {
        // Write code here that turns the phrase above into concrete actions
    }
}
