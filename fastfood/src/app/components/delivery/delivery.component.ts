import { Component, Input } from '@angular/core';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css',
})
export class DeliveryComponent {
  @Input() pedidos: Pedido[] = [];
  pedidosListos: Pedido[] = [];
  entregar(pedido: number) {
    this.pedidos.splice(pedido, 1)
  }
}
