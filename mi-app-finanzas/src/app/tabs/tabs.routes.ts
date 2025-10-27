// src/app/tabs/tabs.routes.ts
// src/app/tabs/tabs.routes.ts
import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

import { InicioPage } from './inicio/inicio.page';
import { RegistrarMovimientoPage } from './registrar-movimiento/registrar-movimiento.page';
import { HistorialPage } from './historial/historial.page';
import { ConfiguracionPage } from './configuracion/configuracion.page';

export const TabsRoutes: Routes = [
  // ... el resto del código
];

export const TabsRoutes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        component: InicioPage,
      },
      {
        path: 'registrar-movimiento',
        component: RegistrarMovimientoPage,
      },
      {
        path: 'historial',
        component: HistorialPage,
      },
      {
        path: 'configuracion',
        component: ConfiguracionPage,
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full',
      },
    ],
  },
];