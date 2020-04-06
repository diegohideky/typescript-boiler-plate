import request from 'supertest'
import app from '../../../app'
import Foo from '../model'
import Util from './util'

const ENDPOINT = '/api/v1/foo'

describe('#Foo', () => {
  beforeEach(async ()=> {
    await Util.removeAll()
  })

  it('should list foo', async () => {
    const foo = await Foo.create({ name: 'Foo Test' })

    const { status, body } = await request(app)
      .get(ENDPOINT)
    
    expect(status).toBe(200)
    expect(body).toBeInstanceOf(Object)
    expect(body.foo).toBeInstanceOf(Array)
    expect(body.foo).toHaveLength(1)
    expect(body.foo[0].name).toBe(foo.name)
  })

  it('should create new foo', async () => {
    const { status, body } = await request(app)
      .post(ENDPOINT)
      .send({ name: 'New Foo' })
    
    expect(status).toBe(200)
    expect(body).toBeInstanceOf(Object)
    expect(body.foo).toHaveProperty('name')
    expect(body.foo.name).toBe('New Foo')
  })

  it('should update foo', async () => {
    const foo = await Foo.create({ name: 'Foo Test' })
    const response = await request(app)
      .put(`${ENDPOINT}/${foo.id}`)
      .send({ name: 'Updated Foo' })

    expect(response.status).toBe(204)

    const updated = await Foo.findByPk(foo.id)
    expect(updated.name).toBe('Updated Foo')
  })

  it('should remove foo', async () => {
    const foo = await Foo.create({ name: 'Foo Test' })
    const found = await Foo.findByPk(foo.id)
    expect(found.name).toBe('Foo Test')

    const response = await request(app)
      .delete(`${ENDPOINT}/${foo.id}`)

    expect(response.status).toBe(200)

    const removed = await Foo.findByPk(foo.id)
    expect(removed).toBe(null)
  })
})
