import Model from '../model'

class FooUtil {
  public async removeAll() {
    return Model.destroy({ where: {} })
  }
}

export default new FooUtil()
