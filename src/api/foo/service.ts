import { Foo, FooModel } from './interface'
import Repo from './repository'

const findAll = async (): Promise<Array<Foo>> => {
  return Repo.findAll()
}

const findById = async (id: number): Promise<Foo> => {
  return Repo.findById(id)
}

const save = async (foo: Foo): Promise<Foo> => {
  return Repo.save(foo)
}

const updateById = async (id: number, foo: Foo): Promise<Foo> => {
  return Repo.updateById(id, foo)
}

const removeById = async (id: number): Promise<Foo> => {
  return Repo.removeById(id)
}

export default {
  findAll,
  findById,
  save,
  updateById,
  removeById,
}
