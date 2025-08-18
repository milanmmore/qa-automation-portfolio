/**************************************************/

/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Automated Software Testing with Playwright (https://www.udemy.com/course/automated-software-testing-with-playwright/)
* Tutor: Kaniel Outis (https://www.udemy.com/user/shinoku911/)
*/

/**************************************************/

import {test,expect} from '@playwright/test'

test('Section_02_KO_UI_Tests - Go to Application', async ({page} )=> {

    //Go to the Application
    await page.goto("https://example.com/")
    
})

test('Section_02_KO_UI_Tests - Go to Application - Assert Title', async ({ page }) => {
    //Go to the Application
    await page.goto("https://example.com/")

    //Assert Title
    await expect(page).toHaveTitle("Example Domain")
})

export async function getRandomPassword() {
    // Generate a random password with at least one uppercase letter, one lowercase letter, one number, and one special character
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    return password;
}


