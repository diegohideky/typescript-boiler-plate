import { Foo } from './interface'
import Model from './model'

const findAll = async (): Promise<Array<Foo>> => Model.findAll()

const findById = async (id: number): Promise<Foo> => Model.findByPk(id)

const save = async (foo: Foo): Promise<Foo> => Model.create(foo)

const updateById = async (
  id: number,
  foo: Foo,
): Promise<Foo> => Model.update(foo, { where: { id } })

const removeById = async (id: number): Promise<Foo> => Model.destroy({ where: { id } })

export default {
  findAll,
  findById,
  save,
  updateById,
  removeById,
}
