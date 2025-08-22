package com.framework.tests;

import com.framework.base.BaseTest;
import com.framework.endpoints.PostsEndpoint;
import com.framework.models.Post;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;

import static org.hamcrest.Matchers.*;

public class PostsTests extends BaseTest {
    
    @Test(priority = 1)
    public void testGetAllPosts() {
        logInfo("Starting test: Get all posts");
        
        Response response = PostsEndpoint.getAllPosts();
        
        Assert.assertEquals(response.getStatusCode(), 200, "Status code should be 200");
        Assert.assertTrue(response.jsonPath().getList("$").size() > 0, "Response should contain posts");
        
        logPass("Get all posts test passed");
    }
    
    @Test(priority = 2)
    public void testGetPostById() {
        logInfo("Starting test: Get post by ID");
        
        int postId = 1;
        Response response = PostsEndpoint.getPostById(postId);
        
        Assert.assertEquals(response.getStatusCode(), 200, "Status code should be 200");
        Assert.assertEquals(response.jsonPath().getInt("id"), postId, "Post ID should match");
        Assert.assertNotNull(response.jsonPath().getString("title"), "Title should not be null");
        Assert.assertNotNull(response.jsonPath().getString("body"), "Body should not be null");
        
        logPass("Get post by ID test passed");
    }
    
    @Test(priority = 3)
    public void testCreatePost() {
        logInfo("Starting test: Create new post");
        
        Post newPost = new Post(1, "Test Title", "Test Body");
        Response response = PostsEndpoint.createPost(newPost);
        
        Assert.assertEquals(response.getStatusCode(), 201, "Status code should be 201");
        Assert.assertEquals(response.jsonPath().getString("title"), "Test Title", "Title should match");
        Assert.assertEquals(response.jsonPath().getString("body"), "Test Body", "Body should match");
        Assert.assertEquals(response.jsonPath().getInt("userId"), 1, "User ID should match");
        
        logPass("Create post test passed");
    }
    
    @Test(priority = 4)
    public void testUpdatePost() {
        logInfo("Starting test: Update existing post");
        
        int postId = 1;
        Post updatedPost = new Post(1, "Updated Title", "Updated Body");
        Response response = PostsEndpoint.updatePost(postId, updatedPost);
        
        Assert.assertEquals(response.getStatusCode(), 200, "Status code should be 200");
        Assert.assertEquals(response.jsonPath().getString("title"), "Updated Title", "Title should be updated");
        Assert.assertEquals(response.jsonPath().getString("body"), "Updated Body", "Body should be updated");
        
        logPass("Update post test passed");
    }
    
    @Test(priority = 5)
    public void testDeletePost() {
        logInfo("Starting test: Delete post");
        
        int postId = 1;
        Response response = PostsEndpoint.deletePost(postId);
        
        Assert.assertEquals(response.getStatusCode(), 200, "Status code should be 200");
        
        logPass("Delete post test passed");
    }
    
    @Test(priority = 6)
    public void testGetPostsByUserId() {
        logInfo("Starting test: Get posts by user ID");
        
        int userId = 1;
        Response response = PostsEndpoint.getPostsByUserId(userId);
        
        Assert.assertEquals(response.getStatusCode(), 200, "Status code should be 200");
        Assert.assertTrue(response.jsonPath().getList("$").size() > 0, "Response should contain posts");
        
        // Verify all returned posts belong to the specified user
        for (int i = 0; i < response.jsonPath().getList("$").size(); i++) {
            int postUserId = response.jsonPath().getInt("[" + i + "].userId");
            Assert.assertEquals(postUserId, userId, "All posts should belong to user " + userId);
        }
        
        logPass("Get posts by user ID test passed");
    }
    
    @Test(priority = 7)
    public void testGetNonExistentPost() {
        logInfo("Starting test: Get non-existent post");
        
        int nonExistentId = 999999;
        Response response = PostsEndpoint.getPostById(nonExistentId);
        
        Assert.assertEquals(response.getStatusCode(), 404, "Status code should be 404 for non-existent post");
        
        logPass("Get non-existent post test passed");
    }
} 