import { ComponentProps } from "react";

interface TableRowProps extends ComponentProps<'tr'> {
  noHover?: boolean;
}

export function TableRow({ noHover, ...props }: TableRowProps) {
  return (
    <tr
      {...props}
      className={noHover
        ? "border-b border-white/10"
        : "border-b border-white/10 hover:bg-white/5"
      }
    />
  )
}