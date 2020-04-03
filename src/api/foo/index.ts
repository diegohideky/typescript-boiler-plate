import express from 'express'
import Ctrl from './controller'

const router = express.Router()

router
  .route('/foo')

  // GET /api/v1/foo - Get all foo
  .get(Ctrl.findAll)

  // POST /api/v1/foo - Post foo
  .post(Ctrl.save)

router
  .route('/foo/:id')

  // PUT /api/v1/foo/:id - Put foo
  .put(Ctrl.update)

  // DELETE /api/v1/foo/:id - Put foo
  .delete(Ctrl.remove)

export default router
