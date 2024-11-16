import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  //withComponentInputBinding con questo si passano al router i parametri
  // e non serve più fare la injection
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withComponentInputBinding())]
};
