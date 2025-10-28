import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

// Importa las funciones para manejar iconos
import { addIcons } from 'ionicons';
import { home, addCircle, list, settings } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class TabsPage {
  constructor() {
    // Registra los iconos para que la app los reconozca
    addIcons({
      'home': home,
      'add-circle': addCircle,
      'list': list,
      'settings': settings
    });
  }
}