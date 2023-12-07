"use client";

import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";

const START_YEAR = 2003;
const END_YEAR = 2022;

export const DurationPicker = () => {
  const years = useMemo(() => {
    const yearArray = [];
    for (let year = START_YEAR; year <= END_YEAR; year++) {
      yearArray.push(year);
    }
    return yearArray;
  }, []);

  const [fromYear, setFromYear] = useState<number | null>(null);
  const [toYear, setToYear] = useState<number | null>(null);

  return (
    <div className="flex flex-row justify-end py-8">
      <Card className="max-w-[500px] rounded-xl" raised>
        <CardContent className="flex flex-row gap-5 items-center !pb-3">
          <Typography color="text.secondary" gutterBottom>
            Compare Years
          </Typography>
          <FormControl>
            <InputLabel id="demo-simple-select-label">From</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={fromYear}
              label="From"
              className="w-[150px]"
              onChange={(e) => setFromYear(e.target.value as number)}
            >
              {years
                .filter((year) => !toYear || year < toYear)
                .map((year) => (
                  <MenuItem value={year}>{year}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">To</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={toYear}
              label="To"
              className="w-[150px]"
              onChange={(e) => setToYear(e.target.value as number)}
            >
              {years
                .filter((year) => !fromYear || year > fromYear)
                .map((year) => (
                  <MenuItem value={year}>{year}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};
