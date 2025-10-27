// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Movement {
  id: string;
  description: string;
  amount: number;
  date: Date;
  type: 'income' | 'expense';
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private movements: Movement[] = [];
  private movementsSubject = new BehaviorSubject<Movement[]>([]);
  public movements$ = this.movementsSubject.asObservable();

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.loadMovements();
  }

  async loadMovements() {
    const storedMovements = await this.storage.get('movements');
    if (storedMovements) {
      this.movements = storedMovements;
      this.movementsSubject.next([...this.movements]);
    }
  }

  async addMovement(movement: Omit<Movement, 'id'>) {
    const newMovement: Movement = {
      ...movement,
      id: this.generateId(),
      date: new Date(movement.date)
    };
    
    this.movements.push(newMovement);
    await this.saveMovements();
    return newMovement;
  }

  private async saveMovements() {
    await this.storage.set('movements', this.movements);
    this.movementsSubject.next([...this.movements]);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}