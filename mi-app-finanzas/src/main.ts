// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular/common';
import { RouteReuseStrategy } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { provideStorage } from '@ionic/storage-angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { DataService } from './app/services/data';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideRouter(routes),
    provideIonicAngular(),
    
    {
      provide: Storage,
      useFactory: () => {
        // Le damos los dos argumentos que pide:
        // 1. La plataforma: 'browser'
        // 2. La configuración: {} (un objeto vacío para usar los defaults)
        return provideStorage('browser', {}); 
      }
    },

    DataService
  ],
});