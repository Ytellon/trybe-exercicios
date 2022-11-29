import { Model, isValidObjectId } from 'mongoose';
import IModel from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  // atributos...
  protected _model: Model<T>;
  constructor(model: Model<T>) {
    this._model = model;
  }
  // métodos...
  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOne({ _id });
  }

  public async read(): Promise<T[] | null> {
    return this._model.find();
  }

  public async destroy(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findByIdAndDelete({ _id });
  }
}

export default MongoModel;
