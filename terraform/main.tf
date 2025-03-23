provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}

# Use an existing resource group
data "azurerm_resource_group" "existing" {
  name = "chika-project"
}

resource "azurerm_static_web_app" "example" {
  name                = "my-portfolio"
  resource_group_name = data.azurerm_resource_group.existing.name
  location            = "eastasia"
  sku_tier            = "Free"
  sku_size            = "Free"

  repository_url    = "https://github.com/SyNguyen98/my-portfolio"
  repository_branch = "main"
  repository_token  = var.github_token
}

output "static_web_app_url" {
  value = azurerm_static_web_app.example.default_host_name
}
