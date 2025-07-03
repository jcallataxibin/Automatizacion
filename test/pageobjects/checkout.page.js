import { $, browser } from '@wdio/globals'
import { menuSelectors } from '../../constants/menu.constants';
import { checkoutIDs, checkoutSelectors } from '../../constants/checkout.constants';
import { generalData } from '../../constants/data.constants';

class CheckoutPage {
    
    get checkoutButton () {
        return $(checkoutSelectors.checkoutButton);
    }

    get guestUser () {
        return $(checkoutSelectors.guestUser);
    }

    get registerUser () {
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

    async selector (id) {
        return $(checkoutSelectors.inputTextField(id));
    }

    async inputValue(id, value) {
        const inputField = await this.selector(id);
        await inputField.setValue(value);
    }

    get inputEmail () {
        return $(checkoutSelectors.email);
    }

    get inputTelephone () {
        return $(checkoutSelectors.telephone);
    }

    get inputAddress () {
        return $(checkoutSelectors.address1);
    }

    get inputCity () {
        return $(checkoutSelectors.city);
    }

    get inputPostalCode () {
        return $(checkoutSelectors.postalCode);
    }

    get selectCountry () {
        return $(checkoutSelectors.country);
    }

    get selectCountryOption () {
        return $(checkoutSelectors.countryOption); 
    }

    get selectZone () {
        return $(checkoutSelectors.zone);   
    }

    get selectZoneOption () {
        return $(checkoutSelectors.zoneOption);
    }

    get continueButtonPayment () {
        return $(checkoutSelectors.continueButtonPayment);
    }

    async checkoutForm(){
        await this.checkoutButton.click();
        await this.guestUser.click();
        await this.continueButton.click();
        // await this.inputFirstName.setValue(generalData.firstName);
        // await this.inputLasttName.setValue(generalData.lastName);
        // await this.inputEmail.setValue(generalData.email);
        // await this.inputTelephone.setValue(generalData.telephone);
        // await this.inputAddress.setValue(generalData.address);
        // await this.inputCity.setValue(generalData.city);
        // await this.inputPostalCode.setValue(generalData.postalCode);

        // (await this.selector(checkoutIDs.firstName)).setValue(generalData.firstName);
        await this.inputValue(checkoutIDs.firstName, generalData.firstName);
        await this.inputValue(checkoutIDs.lastName, generalData.lastName);
        await this.inputValue(checkoutIDs.email, generalData.email);
        await this.inputValue(checkoutIDs.telephone, generalData.telephone);
        await this.inputValue(checkoutIDs.address1, generalData.address);
        await this.inputValue(checkoutIDs.city, generalData.city);
        await this.inputValue(checkoutIDs.postalCode, generalData.postalCode);

        await this.selectCountry.click();
        await this.selectCountryOption.click();
        await browser.pause(2000); // Wait for the country to be selected
        await this.selectZone.click();
        await this.selectZoneOption.click();
        await browser.pause(2000); // Wait for the zone to be selected

        await this.continueButtonPayment.scrollIntoView();
        await this.continueButtonPayment.click();
        await browser.saveScreenshot('./screenshots/checkout.png');

        // await this.selector(checkoutIDs.firstName)
    }

    async checkoutFormRegisterUser(){
        await this.checkoutButton.click();
        await this.registerUser.click();
        await this.continueButton.click();
        // await this.inputFirstName.setValue(generalData.firstName);
        // await this.inputLasttName.setValue(generalData.lastName);
        // await this.inputEmail.setValue(generalData.email);
        // await this.inputTelephone.setValue(generalData.telephone);
        // await this.inputAddress.setValue(generalData.address);
        // await this.inputCity.setValue(generalData.city);
        // await this.inputPostalCode.setValue(generalData.postalCode);

        // (await this.selector(checkoutIDs.firstName)).setValue(generalData.firstName);
        await this.inputValue(checkoutIDs.firstName, generalData.firstName);
        await this.inputValue(checkoutIDs.lastName, generalData.lastName);
        await this.inputValue(checkoutIDs.email, generalData.email);
        await this.inputValue(checkoutIDs.telephone, generalData.telephone);
        await this.inputValue(checkoutIDs.address1, generalData.address);
        await this.inputValue(checkoutIDs.city, generalData.city);
        await this.inputValue(checkoutIDs.postalCode, generalData.postalCode);

        await this.selectCountry.click();
        await this.selectCountryOption.click();
        await browser.pause(2000); // Wait for the country to be selected
        await this.selectZone.click();
        await this.selectZoneOption.click();
        await browser.pause(2000); // Wait for the zone to be selected

        await this.continueButtonPayment.scrollIntoView();
        await this.continueButtonPayment.click();
        await browser.saveScreenshot('./screenshots/checkout.png');

        // await this.selector(checkoutIDs.firstName)
    }
}

export default new CheckoutPage();