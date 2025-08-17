package com.framework.base;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.*;

import java.io.IOException;
import java.util.Properties;

public class BaseTest {
    
    protected static ExtentReports extent;
    protected static ExtentTest test;
    protected Properties config;
    
    @BeforeSuite
    public void setupSuite() {
        ExtentSparkReporter spark = new ExtentSparkReporter("target/extent-reports/ExtentReport.html");
        extent = new ExtentReports();
        extent.attachReporter(spark);
        
        // Load configuration
        config = new Properties();
        try {
            config.load(getClass().getClassLoader().getResourceAsStream("config.properties"));
        } catch (IOException e) {
            System.err.println("Failed to load config.properties");
        }
        
        // Set base URI
        RestAssured.baseURI = config.getProperty("base.url", "https://jsonplaceholder.typicode.com");
        RestAssured.port = Integer.parseInt(config.getProperty("base.port", "443"));
        
        // Enable request/response logging
        RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
    }
    
    @BeforeMethod
    public void setupTest(java.lang.reflect.Method method) {
        test = extent.createTest(method.getName());
    }
    
    @AfterMethod
    public void teardownTest() {
        if (test != null) {
            test.info("Test completed");
        }
    }
    
    @AfterSuite
    public void teardownSuite() {
        if (extent != null) {
            extent.flush();
        }
    }
    
    protected void logInfo(String message) {
        if (test != null) {
            test.info(message);
        }
        System.out.println(message);
    }
    
    protected void logPass(String message) {
        if (test != null) {
            test.pass(message);
        }
        System.out.println("[PASS] " + message);
    }
    
    protected void logFail(String message) {
        if (test != null) {
            test.fail(message);
        }
        System.err.println("[FAIL] " + message);
    }
} 