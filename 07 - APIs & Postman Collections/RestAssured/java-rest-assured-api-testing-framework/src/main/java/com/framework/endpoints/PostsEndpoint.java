package com.framework.endpoints;

import com.framework.models.Post;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.given;

public class PostsEndpoint {
    
    private static final String POSTS_PATH = "/posts";
    
    public static Response getAllPosts() {
        return given()
                .when()
                .get(POSTS_PATH)
                .then()
                .extract().response();
    }
    
    public static Response getPostById(int id) {
        return given()
                .pathParam("id", id)
                .when()
                .get(POSTS_PATH + "/{id}")
                .then()
                .extract().response();
    }
    
    public static Response createPost(Post post) {
        return given()
                .header("Content-Type", "application/json")
                .body(post)
                .when()
                .post(POSTS_PATH)
                .then()
                .extract().response();
    }
    
    public static Response updatePost(int id, Post post) {
        return given()
                .header("Content-Type", "application/json")
                .pathParam("id", id)
                .body(post)
                .when()
                .put(POSTS_PATH + "/{id}")
                .then()
                .extract().response();
    }
    
    public static Response deletePost(int id) {
        return given()
                .pathParam("id", id)
                .when()
                .delete(POSTS_PATH + "/{id}")
                .then()
                .extract().response();
    }
    
    public static Response getPostsByUserId(int userId) {
        return given()
                .queryParam("userId", userId)
                .when()
                .get(POSTS_PATH)
                .then()
                .extract().response();
    }
} 