import { TableHeader } from "@/components/Layout/TableHeader/TableHeader";
import { NumericCell } from "@/components/Sales/NumericCell/NumericCell";
import { HeaderProps, Sale } from "@/types";
import { Tooltip, Typography } from "@mui/material";
import { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";

const Header = ({ column }: HeaderProps) => (
  <TableHeader title={column.columnDef.header} />
);

export const useSalesTable = () => {
  const columns = useMemo<MRT_ColumnDef<Sale>[]>(
    () => [
      {
        id: "month",
        header: "Month",
        accessorKey: "month",
        Header,
        Cell: ({ cell }) => <TableHeader title={cell.getValue<string>()} />,
      },
      {
        id: "value",
        header: "Revenue",
        accessorFn: (row) => row,
        Header,
        Cell: ({ cell }) => {
          const row = cell.getValue() as Sale;

          return (
            <NumericCell
              value={row.achievedValue}
              percentageProps={{
                value: row.growthPercentage ?? 0,
                signed: true,
              }}
            />
          );
        },
      },
      {
        id: "gap",
        header: "Gap",
        minSize: 200,
        accessorFn: (row) => row,
        Header,
        Cell: ({ cell }) => {
          const row = cell.getValue() as Sale;

          return (
            <NumericCell
              value={row.gap}
              percentageProps={{
                value: row.gapPercentage ?? 0,
                signed: true,
                isReversed: true,
              }}
            />
          );
        },
      },
      {
        id: "costOfSales",
        header: "Cost of Sale",
        size: 75,
        accessorFn: (row) => row,
        Header,
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
        id: "profit",
        header: "Profit",
        size: 120,
        accessorKey: "profit",
        Header,
        Cell: ({ cell }) => {
          return <NumericCell value={cell.getValue<number>()} />;
        },
      },
      {
        id: "margin",
        header: "Margin",
        size: 100,
        accessorKey: "margin",
        Header,
        Cell: ({ cell }) => (
          <NumericCell
            percentageProps={{
              value: cell.getValue<number>(),
              variant: "default",
            }}
          />
        ),
      },
      {
        id: "budget",
        header: "Budget",
        minSize: 200,
        Header,
        accessorFn: (row) => row,
        Cell: ({ cell }) => {
          const row = cell.getValue() as Sale;

          return (
            <NumericCell
              value={row.budget}
              percentageProps={{ value: row.achievedBudget, scaled: true }}
            />
          );
        },
      },
    ],
    []
  );

  return {
    columns,
  };
};
