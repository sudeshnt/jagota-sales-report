import express from 'express'
import { fetchSales } from '../controllers/sales'

const router = express.Router()

const salesRoutes = (router: express.Router) => {
  router.post('/sales', fetchSales)
}

export default (): express.Router => {
  salesRoutes(router)

  return router
}
