import { Chip } from "@mui/material";
import { useMemo } from "react";

export type PercentageChipProps = {
  value?: number;
  signed?: boolean;
  isReversed?: boolean;
  variant?:
    | "default"
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning";
};

export const PercentageChip = (props: PercentageChipProps) => {
  const { value = 0, signed, isReversed, variant } = props;

  const color = useMemo(() => {
    if (signed) {
      if (value >= 0) {
        return isReversed ? "error" : "success";
      }
      return isReversed ? "success" : "error";
    }
    return "info";
  }, [value, signed, isReversed]);

  const label = useMemo(() => {
    if (!signed || value <= 0) return `${value}%`;

    return `+${value}%`;
  }, [signed, value]);

  return <Chip variant="outlined" color={variant ?? color} label={label} />;
};
