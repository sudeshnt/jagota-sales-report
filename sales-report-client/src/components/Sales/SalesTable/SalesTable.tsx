"use client";

import { useSalesTable } from "@/hooks/useSalesTable";
import { Sale } from "@/types";
import { Typography } from "@mui/material";
import { MaterialReactTable } from "material-react-table";

const TABLE_CONFIG = {
  enableRowSelection: false,
  enablePagination: false,
  enableColumnOrdering: false,
  enableGlobalFilter: false,
  enableFullScreenToggle: false,
  enableDensityToggle: false,
  enableColumnFilters: false,
  enableColumnActions: false,
  enableTableFooter: false,
  enableBottomToolbar: false,
};

type SalesTableProps = {
  year: string;
  data: Sale[];
};

export const SalesTable = (props: SalesTableProps) => {
  const { year, data } = props;
  const { columns } = useSalesTable();

  return (
    <div>
      <Typography variant="h4">{year}</Typography>
      <MaterialReactTable data={data} columns={columns} {...TABLE_CONFIG} />
    </div>
  );
};
