import { Foo } from './interface'
import Repo from './repository'

class FooService {
  async findAll(): Promise<Foo[]> {
    return Repo.findAll()
  }

  async findById(id: number): Promise<Foo> {
    return Repo.findById(id)
  }

  async save(foo: Foo): Promise<Foo> {
    return Repo.save(foo)
  }

  async updateById(id: number, foo: Foo): Promise<Foo> {
    return Repo.updateById(id, foo)
  }

  async removeById(id: number): Promise<Foo> {
    return Repo.removeById(id)
  }
}

export default new FooService()
