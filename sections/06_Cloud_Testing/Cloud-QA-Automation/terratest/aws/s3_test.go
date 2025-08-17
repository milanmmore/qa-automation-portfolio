package test

import (
  "testing"
  "github.com/gruntwork-io/terratest/modules/terraform"
  "github.com/stretchr/testify/assert"
)

func TestS3BucketProperties(t *testing.T) {
  terraformOptions := &terraform.Options{
    TerraformDir: "../../terraform/aws",
  }

  defer terraform.Destroy(t, terraformOptions)
  terraform.InitAndApply(t, terraformOptions)

  bucketName := terraform.Output(t, terraformOptions, "bucket_name")
  versioning := terraform.Output(t, terraformOptions, "versioning_enabled")
  encryption := terraform.Output(t, terraformOptions, "encryption_enabled")

  assert.Contains(t, bucketName, "qa-automation")
  assert.Equal(t, "true", versioning)
  assert.Equal(t, "true", encryption)
}
