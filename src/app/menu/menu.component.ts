import { Component } from '@angular/core';
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    showMenu = false;
    constructor() {
        // noop
    }

    // this toggles menu section
    toggleMenuSection() {
        this.showMenu = !this.showMenu;
    }
}
