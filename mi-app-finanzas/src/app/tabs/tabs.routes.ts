// src/app/tabs/tabs.routes.ts
import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

import { InicioPage } from './inicio/inicio.page';
import { RegistrarMovimientoPage } from './registrar-movimiento/registrar-movimiento.page';
import { HistorialPage } from './historial/historial.page';
import { ConfiguracionPage } from './configuracion/configuracion.page';

export const TabsRoutes: Routes = [
  {
    path: '', // <-- ¡MUY IMPORTANTE! La ruta principal debe ser un string vacío.
    component: TabsPage,
    children: [
      {
        path: 'inicio', // Esta es la ruta para la pestaña de inicio
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
        redirectTo: 'inicio', // Si alguien va a /tabs, redirige a /tabs/inicio
        pathMatch: 'full'
      }
    ]
  }
];