import express from "express";
import { fetchAllSales, fetchFilteredSales } from "../db/sales";

export const fetchSales = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    let sales;
    const { filter } = req.body;

    if (filter.fromYear && filter.toYear) {
      sales = await fetchFilteredSales(filter);
    } else {
      sales = await fetchAllSales();
    }
    return res.status(200).json(sales);
  } catch (err) {
    res.sendStatus(400);
  }
};
