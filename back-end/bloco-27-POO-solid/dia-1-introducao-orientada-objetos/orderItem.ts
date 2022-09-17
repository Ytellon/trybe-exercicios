class OrderItem {
  private _ItemName: string;
  private _price: number;

  constructor(ItemName: string, price: number) {
    this._ItemName = ItemName;
    this._price = price;
  }

  get ItemName(): string {
    return this._ItemName;
  }

  set ItemName(value: string) {
    this._ItemName = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}

export default OrderItem;