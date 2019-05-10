import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';
if (environment.production) {
  enableProdMode();
}

import {LicenseManager} from "ag-grid-enterprise";
LicenseManager.setLicenseKey("Evaluation_License-_Not_For_Production_Valid_Until_1_July_2019__MTU2MTkzNTYwMDAwMA==8ea846c82b3280fc8df9f911fc6de1b9");
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
