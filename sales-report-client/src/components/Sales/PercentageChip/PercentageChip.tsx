import { Chip } from "@mui/material";
import { useMemo } from "react";

export type PercentageChipProps = {
  value?: number;
  signed?: boolean;
  isReversed?: boolean;
  scaled?: boolean;
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
  const { value = 0, signed, scaled, isReversed, variant } = props;

  const color = useMemo(() => {
    if (variant) return variant;
    if (scaled) {
      if (value >= 90) {
        return "success";
      } else if (value >= 80) {
        return "warning";
      }
      return "error";
    } else if (signed) {
      if (value >= 0) {
        return isReversed ? "error" : "success";
      }
      return isReversed ? "success" : "error";
    }
    return "info";
  }, [value, variant, scaled, signed, isReversed]);

  const label = useMemo(() => {
    if (!signed || value <= 0) return `${value}%`;

    return `+${value}%`;
  }, [signed, value]);

  return <Chip variant="outlined" color={color} label={label} />;
};
