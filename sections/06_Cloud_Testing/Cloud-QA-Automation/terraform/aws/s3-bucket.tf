resource "aws_s3_bucket" "qa_bucket" {
  bucket = "qa-automation-bucket"
  acl    = "private"
  tags = {
    Name        = "QA Bucket"
    Environment = "Dev"
  }
}

output "bucket_name" {
  value = aws_s3_bucket.qa_bucket.id
}

output "versioning_enabled" {
  value = aws_s3_bucket_versioning.qa_bucket_versioning.enabled
}

output "encryption_enabled" {
  value = aws_s3_bucket_server_side_encryption_configuration.qa_bucket_encryption.rule[0].apply_server_side_encryption_by_default.sse_algorithm != ""
}


