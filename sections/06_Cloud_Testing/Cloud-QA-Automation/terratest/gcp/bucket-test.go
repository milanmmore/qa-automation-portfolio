package test

import (
  "testing"
  "github.com/gruntwork-io/terratest/modules/terraform"
  "github.com/stretchr/testify/assert"
)

func TestGCPBucketLabels(t *testing.T) {
  terraformOptions := &terraform.Options{
    TerraformDir: "../../terraform/gcp",
  }

  defer terraform.Destroy(t, terraformOptions)
  terraform.InitAndApply(t, terraformOptions)

  bucketName := terraform.Output(t, terraformOptions, "bucket_name")
  envLabel := terraform.Output(t, terraformOptions, "env_label")

  assert.Contains(t, bucketName, "qa-gcp-bucket")
  assert.Equal(t, "dev", envLabel)
}
