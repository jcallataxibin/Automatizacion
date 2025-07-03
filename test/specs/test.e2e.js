import checkoutPage from "../pageobjects/checkout.page"
import deliveryPage from "../pageobjects/delivery.page"
import menuPage from "../pageobjects/menu.page"
import paymentPage from "../pageobjects/payment.page"
import principalPage from "../pageobjects/principal.page"
import successPage from "../pageobjects/success.page"

describe('Shopping Cart', () => {
    it('Shopping cart as guest user', async () => {
        // abrir pagina web
        await principalPage.open()
        // maximizar ventana
        await browser.maximizeWindow()

        // seleccionar productos
        await menuPage.seleccionarProductos()

        await browser.pause(2000)

        await checkoutPage.checkoutForm()

        await deliveryPage.deliveryForm()

        await paymentPage.paymentForm()

        await browser.pause(2000)

        await successPage.successForm()

        await browser.pause(2000)
    })
})

