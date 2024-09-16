export class Pedido {
  number: number;
  name: string;
  description: string;
  date: Date;

  constructor() {
    this.number = Math.floor(Math.random() * 100) +1;
    this.name = '';
    this.description = '';
    this.date = new Date();
  }
}