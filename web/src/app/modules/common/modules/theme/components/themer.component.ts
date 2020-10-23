import { Component, Inject, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'themer',
    templateUrl: './themer.component.html',
})
export class Themer implements OnInit {
    theme: String;

    constructor() {
        this.theme = window.localStorage.getItem("theme") || "light";
    }

    public ngOnInit(): void {
    }

    public selectDarkTheme() {
        window.localStorage.theme = this.theme = "dark";
        window.location.reload();
    }

    public selectLightTheme() {
        window.localStorage.theme = this.theme = "light";
        window.location.reload();
    }
}
