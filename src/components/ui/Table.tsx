import type { ReactNode } from "react";

type TableProps = {
  columns: string[];
  children: ReactNode;
};

export function Table({ columns, children }: TableProps) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-950/70">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="border-b border-white/10 bg-white/5">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-5 py-4 text-xs uppercase tracking-[0.28em] text-neutral-400">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}
