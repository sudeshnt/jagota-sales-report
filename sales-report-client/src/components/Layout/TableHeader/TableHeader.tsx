type TableHeaderProps = {
  title: string;
};

export const TableHeader = (props: TableHeaderProps) => {
  const { title } = props;

  return <span className="text-primary">{title}</span>;
};
