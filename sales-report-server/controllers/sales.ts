import type express from 'express'
import { type Response } from 'express'
import isEmpty from 'lodash/isEmpty'
import { fetchAllSales, fetchFilteredSales } from '../db/sales'
import { transformSales } from '../helpers'
import {
  type SalesFilter,
  type TransformedSaleDocumentResponse
} from '../types'

interface SalesFilterBody {
  filter: SalesFilter
}

export const fetchSales = async (
  req: express.Request,
  res: express.Response
): Promise<Response<TransformedSaleDocumentResponse> | undefined> => {
  try {
    let sales = []
    const { filter } = req.body as SalesFilterBody

    if (isEmpty(filter.fromYear) && isEmpty(filter.toYear)) {
      sales = await fetchFilteredSales(filter)
    } else {
      sales = await fetchAllSales()
    }

    const transformedSales = transformSales(sales)
    return res.status(200).json(transformedSales)
  } catch (err) {
    res.sendStatus(400)
  }
}
