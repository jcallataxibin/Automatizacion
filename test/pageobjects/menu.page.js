import { $, browser } from '@wdio/globals'
import { menuSelectors } from '../../constants/menu.constants';

class MenuPage {
    
    get selectPrimerProducto () {
        return $(menuSelectors.primerProducto);
    }

    get selectSegundoProducto () {
        return $(menuSelectors.segundoProducto);
    }

    get btnAgregarAlCarrito () {
        return $(menuSelectors.agregarAlCarrito);
    }

    get btnVerCarritoButton () {
        return $(menuSelectors.verCarritoButton);
    }

    get btnVerCarrito () {
        return $(menuSelectors.verCarrito);
    }

    get btnBack () {
        return $(menuSelectors.backButton);
    }

    async seleccionarProductos(){
        await this.selectPrimerProducto.click();
        await this.btnAgregarAlCarrito.click();
        await browser.saveScreenshot('./screenshots/primerProducto.png');
        await this.btnBack.click();
        await this.selectSegundoProducto.click();
        await this.btnAgregarAlCarrito.click();
        await browser.saveScreenshot('./screenshots/segundoProducto.png');
        await this.btnVerCarritoButton.click();
        await this.btnVerCarrito.click();
        await browser.saveScreenshot('./screenshots/carrito.png');
    }
}

export default new MenuPage();