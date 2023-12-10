"use client";

import useSalesStore from "@/store";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect } from "react";

export const DurationPicker = () => {
  const {
    isLoading,
    years,
    fromYear,
    toYear,
    setFromYear,
    setToYear,
    fetchSalesData,
  } = useSalesStore((state) => state);

  useEffect(() => {
    if (!isLoading) fetchSalesData(fromYear, toYear);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromYear, toYear]);

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
              value={fromYear ?? ""}
              label="From"
              className="w-[150px]"
              onChange={(e) => setFromYear(e.target.value as number)}
            >
              {years
                .filter((year) => !toYear || year < toYear)
                .map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">To</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={toYear ?? ""}
              label="To"
              className="w-[150px]"
              onChange={(e) => setToYear(e.target.value as number)}
            >
              {years
                .filter((year) => !fromYear || year > fromYear)
                .map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
};
