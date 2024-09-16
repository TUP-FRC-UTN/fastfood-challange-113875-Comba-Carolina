import { FormsModule, NgForm } from '@angular/forms';
import { Pedido } from './../../models/pedido';
import { Component, EventEmitter, inject, Output } from '@angular/core';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css',
})
export class PosComponent {
  pedido: Pedido = new Pedido();
  @Output() enviarPedidoEmitter: EventEmitter<Pedido> = new EventEmitter<Pedido>();


  enviarPedido(pedido: Pedido) {
    this.enviarPedidoEmitter.emit(pedido);
    this.pedido = new Pedido();
  }
}
