export const checkoutIDs = {
    firstName:          'input-payment-firstname',
    lastName:           'input-payment-lastname',  
    email:              'input-payment-email',
    telephone:          'input-payment-telephone',
    address1:           'input-payment-address-1',
    city:               'input-payment-city',
    postalCode:         'input-payment-postcode',
}

export const checkoutSelectors = {
    checkoutButton:     `//strong[contains(text(),'Checkout')]`,
    guestUser:          `//input[@type='radio' and @value='guest']`,
    continueButton:     `//input[@id='button-account']`,
    firstName:          `//input[@id='input-payment-firstname']`,
    lastName:           `//input[@id='input-payment-lastname']`,
    email:              `//input[@id='input-payment-email']`,
    telephone:          `//input[@id='input-payment-telephone']`,
    address1:           `//input[@id='input-payment-address-1']`,
    city:               `//input[@id='input-payment-city']`,
    postalCode:         `//input[@id='input-payment-postcode']`,
    country:            `//select[@id='input-payment-country']`,
    countryOption:      `//option[contains(text(),'Ukraine')]`,
    zone:               `//select[@id='input-payment-zone']`,
    zoneOption:         `//option[text()='Kyiv']`,
    inputTextField:     (data) => `//input[@id='${data}']`,
}