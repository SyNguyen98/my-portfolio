variable "github_token" {
  description = "GitHub Personal Access Token for Static Web App Deployment"
  type        = string
  sensitive   = true
}

variable "subscription_id" {
  description = "Subscription ID"
  type        = string
  sensitive   = true
}