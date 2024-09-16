import { Component, Input } from '@angular/core';
import { CocinaComponent } from '../cocina/cocina.component';
import { PosComponent } from '../pos/pos.component';
import { DeliveryComponent } from '../delivery/delivery.component';
import { Pedido } from '../../models/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  imports: [CocinaComponent, PosComponent, DeliveryComponent, CommonModule],
  templateUrl: './restaurante.component.html',
  styleUrl: './restaurante.component.css',
})
export class RestauranteComponent {
  pedidosPendientes: Pedido[] = [];
  pedidosIngresados: Pedido[] = [];

  pedidosParaEntregar: Pedido[] = [];

  recibirPedido(pedidoRecibido: Pedido) {
    this.pedidosPendientes.push(pedidoRecibido);
    this.pedidosIngresados.push(pedidoRecibido);
  }
  entregarPedido(pedido: Pedido) {
    this.pedidosParaEntregar.push(pedido);
  }
}
