import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

export function provideAppConfiguration(appConfiguration: AppConfiguration) {
    return () => appConfiguration.initialize();
}

@Injectable()
export class AppConfiguration {

    pageSize: number; // Aantal records dat per keer moet worden opgehaald.
    production: boolean;
    apiSettings: ApiSettings;
    googleApiSettings: GoogleApiSettings;
    googleMapsSettings: GoogleMapsSettings;
    localStorageExpirationInSeconds: number;

    constructor(private http: Http) {
    }

    public initialize() {
        return new Promise((resolve, reject) => {

            this.http.get('config.json').map( res => res.json() ).catch((error: any): any => {

                console.log('Configuration file "config.json" could not be read');
                resolve(true);
                return Observable.throw(error.json().error || 'Server error');

            }).subscribe( (configResponse: ConfigurationFile) => {

                    this.pageSize = configResponse.pageSize;
                    this.production = configResponse.production;
                    this.apiSettings = configResponse.apiSettings;
                    this.googleApiSettings = configResponse.googleApiSettings;
                    this.googleMapsSettings = configResponse.googleMapsSettings;
                    resolve(true);

                });
        });
    }
}

export interface ConfigurationFile {
    pageSize: number;
    production: boolean;
    apiSettings: ApiSettings;
    googleApiSettings: GoogleApiSettings;
    googleMapsSettings: GoogleMapsSettings;
}

export interface ApiSettings {
    apiBaseUrl: string;
}

export interface GoogleApiSettings {
    apiKey: string;
}

export interface GoogleMapsSettings {
    maxNumberOfMarkers: number;
}
