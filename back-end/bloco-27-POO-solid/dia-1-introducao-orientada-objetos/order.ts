import Client from "./client";
import OrderItem from "./orderItem";

class Order {
  private _client: Client;
  private _orderItems: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(
    client: Client,
    orderItems: OrderItem[],
    paymentMethod: string,
    discount: number
  ) {
    this._client = client;
    this.orderItems = orderItems;
    this._paymentMethod = paymentMethod;
    this.discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get orderItems(): OrderItem[] {
    return this._orderItems;
  }

  set orderItems(value: OrderItem[]) {
    this._orderItems = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    this._discount = value;
  }
}

export default Order;
