import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ConfiguracionPage {

  constructor(
    private dataService: DataService,
    private alertCtrl: AlertController
  ) { }

  async confirmResetData() {
    const alert = await this.alertCtrl.create({
      header: '¡Cuidado!',
      message: '¿Estás seguro de que quieres reiniciar todos los datos? Esta acción no se puede deshacer.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Reiniciar',
          role: 'destructive',
          handler: () => {
            this.dataService.resetData();
          }
        }
      ]
    });

    await alert.present();
  }
}