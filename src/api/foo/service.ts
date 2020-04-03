import { Foo } from './interface'
import Repo from './repository'

const findAll = async (): Promise<Array<Foo>> => Repo.findAll()

const findById = async (id: number): Promise<Foo> => Repo.findById(id)

const save = async (foo: Foo): Promise<Foo> => Repo.save(foo)

const updateById = async (id: number, foo: Foo): Promise<Foo> => Repo.updateById(id, foo)

const removeById = async (id: number): Promise<Foo> => Repo.removeById(id)

export default {
  findAll,
  findById,
  save,
  updateById,
  removeById,
}
