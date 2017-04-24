import { Component, OnInit } from '@angular/core';
import { AppConfiguration, GoogleApiSettings } from '../app-configuration';

@Component({
    selector: 'octo-config-spy',
    template: `
        <h3>Google API Settings</h3>
        <p>
            <b>API Key:</b> {{googleApiSettings.apiKey}}
        </p>
    `
})

export class ConfigSpyComponent implements OnInit {

    googleApiSettings: GoogleApiSettings;

    constructor(private config: AppConfiguration) { }

    ngOnInit() {

        this.googleApiSettings = this.config.googleApiSettings;
     }
}
