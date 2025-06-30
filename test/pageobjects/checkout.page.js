import { $ } from '@wdio/globals'
import { menuSelectors } from '../../constants/menu.constants';
import { checkoutIDs, checkoutSelectors } from '../../constants/checkout.constants';

class CheckoutPage {
    
    get checkoutButton () {
        return $(checkoutSelectors.checkoutButton);
    }

    get guestUser () {
        return $(checkoutSelectors.guestUser);
    }

    get continueButton () {
        return $(checkoutSelectors.continueButton);
    }

    get inputFirstName () {
        // return $(checkoutSelectors.firstName);
        return $(checkoutSelectors.inputTextField(checkoutIDs.firstName))
    }

    get inputLasttName () {
        return $(checkoutSelectors.inputTextField(checkoutIDs.lastName));
    }

    // async selector (selector) {
    //     return $(checkoutSelectors.inputTextField(selector));
    // }

    get inputEmail () {
        return $(checkoutSelectors.firstName);
    }

    get inputTelephone () {
        return $(checkoutSelectors.firstName);
    }

    get inputAddress () {
        return $(checkoutSelectors.firstName);
    }

    get inputCity () {
        return $(checkoutSelectors.firstName);
    }

    get inputPostalCode () {
        return $(checkoutSelectors.firstName);
    }

    async checkoutForm(){
        await this.checkoutButton.click();
        await this.guestUser.click();
        await this.continueButton.click();
        await this.inputFirstName.click();
        await this.inputLasttName.click();
        await this.inputEmail.click();
        await this.inputTelephone.click();
        await this.inputAddress.click();
        await this.inputCity.click();
        await this.inputPostalCode.click();

        await this.selector(checkoutIDs.firstName)
    }
}

export default new CheckoutPage();