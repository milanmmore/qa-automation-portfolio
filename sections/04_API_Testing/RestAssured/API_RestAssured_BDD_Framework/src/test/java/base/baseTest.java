package base;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.*;
import io.restassured.specification.*;
import org.junit.jupiter.api.BeforeAll;


public class baseTest {
    @BeforeAll
    public static void setUp() {
        // This method can be used to set up any global configurations or initializations
        // before any tests are run. For example, you might want to initialize a logger,
        // set up a database connection, or configure environment variables.
        System.out.println("Setting up the test environment...");
        RestAssured.baseURI = "https://example.com/api"; // Replace with your API base URI
        RestAssured.basePath = "/V1";

    }

    RequestSpecification requestSpec = new RequestSpecBuilder()
            .setBaseUri("https://example.com/api") // Replace with your API base URI
            .setBasePath("/V1")
            .setContentType(ContentType.JSON)
            .build();

    ResponseSpecification responseSpec = new ResponseSpecBuilder()
            .expectStatusCode(200)
            .expectContentType(ContentType.JSON)
            .build();

}


