import { $ } from '@wdio/globals'
import { generalData } from '../../constants/data.constants';
import { paymentSelectors } from '../../constants/payment.constants';

class PaymentPage {
    
    get termsConditions () {
        return $(paymentSelectors.termsConditions);
    }

    get continueButton () {
        return $(paymentSelectors.continueButton);
    }

    get confirmButton () {
        return $(paymentSelectors.confirmButton);
    }

    async paymentForm(){
        await this.termsConditions.click();
        await this.continueButton.click();
        await this.confirmButton.click();
        await browser.saveScreenshot('./screenshots/payment.png');
    }
}

export default new PaymentPage();