import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { DataService, Movement } from '../../services/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class HistorialPage {

  movements$: Observable<Movement[]>;

  constructor(
    private dataService: DataService,
    private alertCtrl: AlertController
  ) {
    // Obtenemos la lista de movimientos desde el servicio
    this.movements$ = this.dataService.movements$;
  }

  // Función para eliminar un movimiento
  async deleteMovement(movement: Movement) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Eliminación',
      message: `¿Estás seguro de que quieres eliminar "${movement.description}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.dataService.deleteMovement(movement.id);
          }
        }
      ]
    });

    await alert.present();
  }
}