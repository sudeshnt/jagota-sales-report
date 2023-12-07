import express, { Response } from "express";
import { fetchAllSales, fetchFilteredSales } from "../db/sales";
import { transformSales } from "../helpers";
import { TransformedSaleDocumentResponse } from "../types";

export const fetchSales = async (
  req: express.Request,
  res: express.Response
): Promise<Response<TransformedSaleDocumentResponse> | undefined> => {
  try {
    let sales = [];
    const { filter } = req.body;

    if (filter.fromYear && filter.toYear) {
      sales = await fetchFilteredSales(filter);
    } else {
      sales = await fetchAllSales();
    }

    const transformedSales = transformSales(sales);
    return res.status(200).json(transformedSales);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
