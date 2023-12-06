"use client";

import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo } from "react";

type Person = {
  name: string;
  age: number;
};

const data: Person[] = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Sara",
    age: 25,
  },
];

export default function Home() {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        enableHiding: false,
      },
      {
        accessorFn: (originalRow) => originalRow.age,
        id: "age",
        header: "Age",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    enableColumnOrdering: true,
    enableGlobalFilter: false,
  });

  return (
    <main>
      <MaterialReactTable table={table} />
    </main>
  );
}
