import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import {platformBrowser} from "@angular/platform-browser";
import {LicenseManager} from "ag-grid-enterprise/main";
LicenseManager.setLicenseKey("Evaluation_License_Valid_Until__26_May_2018__MTUyNzI4OTIwMDAwMA==345b4a029e68391149aa2162aaa0807c");


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
