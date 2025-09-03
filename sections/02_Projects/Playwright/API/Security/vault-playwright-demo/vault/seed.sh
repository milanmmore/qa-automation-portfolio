#!/bin/bash
vault login $VAULT_ROOT_TOKEN

vault kv put secret/api/admin token="admin-secret-token"
vault kv put secret/api/user token="user-secret-token"
