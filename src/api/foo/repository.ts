import { Foo } from './interface'
import Model from './model'

class FooRepository {
  async findAll(): Promise<Foo[]> {
    return Model.findAll()
  }
  
  async findById(id: number): Promise<Foo> {
    return Model.findByPk(id)
  }
  
  async save(foo: Foo): Promise<Foo> {
    return Model.create(foo)
  }
  
  async updateById(id: number, foo: Foo): Promise<Foo> {
    return Model.update(foo, { where: { id } })    
  }

  async removeById(id: number): Promise<Foo> {
    return Model.destroy({ where: { id } })
  }
}

export default new FooRepository()
