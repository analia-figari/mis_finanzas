import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DataService, Movement } from '../../services/data'; // Importamos el servicio
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfiguracionPage } from "../configuracion/configuracion.page";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule] // CommonModule es necesario para el pipe 'async'
 // CommonModule es necesario para el pipe 'async'
})
export class InicioPage implements OnInit {

  // Este Observable contendrá el saldo total y se actualizará automáticamente
  totalBalance$!: Observable<number>; // <-- ¡Añade el signo de exclamación aquí!

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Cuando la página se inicie, nos suscribimos a los movimientos
    // y calculamos el balance cada vez que haya un cambio.
    this.totalBalance$ = this.dataService.movements$.pipe(
      map((movements: Movement[]) => {
        // Sumamos los ingresos y restamos los egresos
        return movements.reduce((total, movement) => {
          return movement.type === 'income' 
            ? total + movement.amount 
            : total - movement.amount;
        }, 0); // Empezamos en 0
      })
    );
  }
}