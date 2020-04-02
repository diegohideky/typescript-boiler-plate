import { Model } from 'sequelize/types';

export interface Foo {
  id: number,
  name: string,
}

export interface FooModel extends Model<Foo> {}