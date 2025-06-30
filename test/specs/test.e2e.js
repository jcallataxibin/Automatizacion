import checkoutPage from "../pageobjects/checkout.page"
import menuPage from "../pageobjects/menu.page"
import principalPage from "../pageobjects/principal.page"

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // abrir pagina web
        await principalPage.open()
        // maximizar ventana
        await browser.maximizeWindow()

        // seleccionar productos
        await menuPage.seleccionarProductos()

        await browser.pause(2000)

        await checkoutPage.checkoutForm()
    })
})

