import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css',
})
export class CocinaComponent {
  @Input() pedidosPendientes: Pedido[] = [];
  pedidosEnCoccion: Pedido[] = [];

  @Output() terminarCoccionEmitter: EventEmitter<Pedido> =
    new EventEmitter<Pedido>();

  cocinarPedido(pedido: Pedido) {
    this.pedidosPendientes.splice(this.pedidosPendientes.indexOf(pedido), 1);
    this.pedidosEnCoccion.push(pedido);
  }
  terminarCoccion(pedido: Pedido) {
    this.terminarCoccionEmitter.emit(pedido);
    this.pedidosEnCoccion.splice(this.pedidosEnCoccion.indexOf(pedido), 1);
  }
}
