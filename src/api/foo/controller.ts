import { Request, Response } from 'express'
import Service from './service';

const findAll = async (req: Request, res: Response) => {
  try {
    const foo = await Service.findAll()

    res.status(200).json({
      foo, 
      message: 'success'
    });
  } catch (err) {
    res.status(400).json({ err })
  }
}

const save = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const foo = await Service.save(body)

    res.status(200).json({
      foo, 
      message: 'success'
    });
  } catch (err) {
    res.status(400).json({ err })
  }
}

const update = async (req: Request, res: Response) => {
  try {
    const { params, body } = req

    const foo = await Service.findById(+params.id)

    if (!foo) {
      return res.status(404).json({ message: 'not_found' })
    }

    console.log({ id: +params.id })
    console.log({ body })

    const updated = await Service.updateById(+params.id, body)

    res.status(200).json({
      foo: updated,
      message: 'success'
    });
  } catch (err) {
    res.status(400).json({ err })
  }
}

const remove = async (req: Request, res: Response) => {
  try {
    const { params } = req

    const foo = await Service.findById(+params.id)

    if (!foo) {
      return res.status(404).json({ message: 'not_found' })
    }

    const removed = await Service.removeById(+params.id)

    res.status(200).json({
      foo: removed,
      message: 'success'
    });
  } catch (err) {
    res.status(400).json({ err })
  }
}

export default {
  findAll,
  save,
  update,
  remove,
}
