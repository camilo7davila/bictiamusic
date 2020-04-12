import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionesService {

  reproducir$ = new EventEmitter<any>()
  estaReproduciendo$ = new EventEmitter<boolean>()

  constructor() { }
}
