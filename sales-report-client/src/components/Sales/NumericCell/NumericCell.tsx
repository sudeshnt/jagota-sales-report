import {
  PercentageChip,
  PercentageChipProps,
} from "../PercentageChip/PercentageChip";

type NumericCellProps = {
  value?: number;
  percentageProps?: PercentageChipProps | null;
};

export const NumericCell = (props: NumericCellProps) => {
  const { value, percentageProps } = props;

  return (
    <div className="flex items-center gap-2">
      {value != null ? (
        <span className="break-keep min-w-[80px]">
          ฿ {value.toLocaleString()}
        </span>
      ) : null}
      {percentageProps?.value ? <PercentageChip {...percentageProps} /> : null}
    </div>
  );
};
