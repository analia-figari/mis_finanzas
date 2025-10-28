import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- CORRECTO: CommonModule viene de @angular/common
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data'; // <-- CORRECTO: Importamos desde 'data' porque el archivo es 'data.ts'

@Component({
  selector: 'app-registrar-movimiento',
  templateUrl: './registrar-movimiento.page.html',
  styleUrls: ['./registrar-movimiento.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule, // <-- Asegúrate de que CommonModule esté aquí
    FormsModule
  ]
})
export class RegistrarMovimientoPage {

  movement = {
    description: '',
    amount: 0,
    date: new Date(),
    type: 'expense' as 'income' | 'expense',
    category: 'Otros'
  };

  constructor(
    private dataService: DataService, // Ahora sí reconocerá DataService
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  async submitMovement() {
    await this.dataService.addMovement(this.movement);
    
    const toast = await this.toastCtrl.create({
      message: '¡Movimiento guardado!',
      duration: 2000,
      color: 'success'
    });
    toast.present();

    this.navCtrl.navigateBack('/tabs/inicio'); 
  }
}