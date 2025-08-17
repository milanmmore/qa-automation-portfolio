import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  async navigate() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.type('#username', username);
    await this.type('#password', password);
    await this.click('button[type="submit"]');
  }
}
