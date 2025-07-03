import { $ } from '@wdio/globals'
import { deliverySelectors } from '../../constants/delivery.constants';

class PaymentPage {
    
    get continueButton () {
        return $(deliverySelectors.continueButton);
    }

    async deliveryForm(){
        await this.continueButton.click();
        await browser.saveScreenshot('./screenshots/delivery.png');
    }
}

export default new PaymentPage();