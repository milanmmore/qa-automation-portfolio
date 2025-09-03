import axios from 'axios';

export async function getVaultSecret(role: 'admin' | 'user') {
  const VAULT_ADDR = process.env.VAULT_ADDR || 'http://127.0.0.1:8200';
  const VAULT_TOKEN = process.env.VAULT_TOKEN;

  const path = `secret/data/api/${role}`;
  const res = await axios.get(`${VAULT_ADDR}/v1/${path}`, {
    headers: { 'X-Vault-Token': VAULT_TOKEN },
  });

  return res.data.data.data.token;
}
