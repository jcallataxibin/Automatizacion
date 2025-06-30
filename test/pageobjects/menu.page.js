import { $ } from '@wdio/globals'
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

    async seleccionarProductos(){
        await this.selectPrimerProducto.click();
        await this.btnAgregarAlCarrito.click();
        await browser.back();
        await this.selectSegundoProducto.click();
        await this.btnAgregarAlCarrito.click();
        await this.btnVerCarritoButton.click();
        await this.btnVerCarrito.click();
    }
}

export default new MenuPage();