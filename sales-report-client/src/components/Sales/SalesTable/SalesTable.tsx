import { Sale } from "@/types";
import { Typography } from "@mui/material";
import { MRT_TableInstance, MaterialReactTable } from "material-react-table";

type SalesTableProps = {
  year: string;
  table: MRT_TableInstance<Sale>;
};

export const SalesTable = (props: SalesTableProps) => {
  const { year, table } = props;

  return (
    <div>
      <Typography variant="h4">{year}</Typography>
      <MaterialReactTable table={table} />
    </div>
  );
};
