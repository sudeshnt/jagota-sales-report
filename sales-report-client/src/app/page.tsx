"use client";

import { PercentageChip } from "@/components/Sales/PercentageChip/PercentageChip";
import { salesResponse } from "@/mocks";
import { Sale } from "@/types";
import { Tooltip, Typography } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";

export default function Home() {
  const columns = useMemo<MRT_ColumnDef<Sale>[]>(
    () => [
      {
        accessorKey: "month",
        id: "month",
        header: "Month",
        width: 100,
      },
      {
        id: "value",
        header: "Value",
        minSize: 200,
        accessorFn: (row) => row,
        Cell: ({ cell }) => {
          const row = cell.getValue() as Sale;

          return (
            <div className="flex items-center gap-2">
              <span className="break-keep min-w-[80px]">
                ฿ {row.achievedValue.toLocaleString()}
              </span>
              {row.growthPercentage && (
                <PercentageChip signed value={row.growthPercentage} />
              )}
            </div>
          );
        },
      },
      {
        id: "gap",
        header: "Gap",
        minSize: 200,
        accessorFn: (row) => row,
        Cell: ({ cell }) => {
          const row = cell.getValue() as Sale;

          return (
            <div className="flex items-center gap-2">
              <span className="break-keep min-w-[60px]">
                ฿ {row.gap.toLocaleString()}
              </span>
              {row.gapPercentage ? (
                <PercentageChip signed isReversed value={row.gapPercentage} />
              ) : null}
            </div>
          );
        },
      },
      {
        id: "costOfSales",
        header: "Cost of Sale",
        accessorFn: (row) => row,
        Cell: ({ cell }) => {
          const row = cell.getValue() as Sale;

          return (
            <Tooltip
              className="cursor-pointer"
              title={
                <>
                  <Typography color="inherit">Dist.</Typography>
                  <ul>
                    <li>
                      <Typography variant="body2" color="inherit">
                        Marketing: ฿{" "}
                        {row.distribution.marketing.toLocaleString()}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" color="inherit">
                        Sales Team: ฿{" "}
                        {row.distribution.salesTeam.toLocaleString()}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" color="inherit">
                        Operations: ฿{" "}
                        {row.distribution.operations.toLocaleString()}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" color="inherit">
                        Other Expenses: ฿{" "}
                        {row.distribution.otherExpenses.toLocaleString()}
                      </Typography>
                    </li>
                  </ul>
                </>
              }
            >
              <span>฿ {row.costOfSales.toLocaleString()}</span>
            </Tooltip>
          );
        },
      },
      {
        accessorKey: "profit",
        id: "profit",
        header: "Profit",
        Cell: ({ cell }) => {
          return (
            <span className="break-keep min-w-[60px]">
              ฿ {cell.getValue<number>().toLocaleString()}
            </span>
          );
        },
      },
      {
        accessorKey: "margin",
        id: "margin",
        header: "Margin",
        size: 50,
        Cell: ({ cell }) => (
          <PercentageChip value={cell.getValue<number>()} variant="default" />
        ),
      },
      {
        id: "budget",
        header: "Budget",
        minSize: 200,
        accessorFn: (row) => row,
        Cell: ({ cell }) => {
          const row = cell.getValue() as Sale;

          return (
            <div className="flex items-center gap-2">
              <span className="break-keep min-w-[80px]">
                ฿ {row.budget.toLocaleString()}
              </span>
              <PercentageChip value={row.achievedBudget} />
            </div>
          );
        },
      },
    ],
    []
  );

  const tables = Object.entries(salesResponse).map(([year, data]) => ({
    year,
    data: useMaterialReactTable({
      columns,
      data,
      enableRowSelection: false,
      enablePagination: false,
      enableColumnOrdering: true,
      enableGlobalFilter: false,
      enableFullScreenToggle: false,
      enableDensityToggle: false,
      enableColumnFilters: false,
      enableColumnActions: false,
      enableTableFooter: false,
      enableStickyFooter: false,
      enableBottomToolbar: false,
    }),
  }));

  return (
    <main className="max-h-[calc(100vh-240px)] overflow-scroll hide-scrollbar">
      <div className="flex flex-row gap-8">
        {tables.map((table) => (
          <div>
            <Typography variant="h4">{table.year}</Typography>
            <MaterialReactTable table={table.data} />
          </div>
        ))}
      </div>
    </main>
  );
}
