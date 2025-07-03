import { $ } from '@wdio/globals'
import { successSelectors } from '../../constants/success.constants';

class SuccessPage {

    get confirmationMessage () {
        return $(successSelectors.confirmationMessage);
    }
    
    get continueButton () {
        return $(successSelectors.continueButton);
    }

    async successForm(){
        if (await this.confirmationMessage.isDisplayed()) {
            await browser.pause(2000); // Wait for the confirmation message to be displayed
            await browser.saveScreenshot('./screenshots/success.png');
            await this.continueButton.click();
        }else{
            throw new Error("Confirmation message not found");
        }
    }
}

export default new SuccessPage();