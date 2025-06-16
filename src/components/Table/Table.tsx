import type { ReactNode } from "react";
import { useEffect, useMemo, useRef } from "react";
import type { TableStyleProps } from "./styles";
import { Container, OverflowTable } from "./styles";

export interface TableProps extends TableStyleProps {
  children: ReactNode;
}

const remSize = 10;

const createDivider = (height: number) => {
  let divider = document.createElement("div");
  divider.style.top = "0";
  divider.style.right = "0";
  divider.style.width = ".5rem";
  divider.style.position = "absolute";
  divider.style.cursor = "col-resize";
  divider.style.userSelect = "none";
  divider.style.height = height / remSize + "rem";
  divider.className = "columnSelector";
  divider.onclick = (e) => e.stopPropagation();
  return divider;
};

const setListeners = (hr: HTMLDivElement) => {
  let pageX: any, curCol: any, curColWidth: any;

  hr.addEventListener("mousedown", (e: any) => {
    curCol = e.target.parentElement;
    pageX = e.pageX;
    curColWidth = curCol.offsetWidth;
  });

  document.addEventListener("mousemove", (e: any) => {
    if (curCol) {
      const diffX = e.pageX - pageX;
      curCol.style.width = (curColWidth + diffX) / remSize + "rem";
    }
  });

  document.addEventListener("mouseup", () => {
    curCol = undefined;
    pageX = undefined;
    curColWidth = undefined;
  });
};

const resizableGrid = (table: HTMLTableElement) => {
  const thead = table.getElementsByTagName("thead")[0];
  const row = thead.getElementsByTagName("tr")[0];
  const cols: any = row ? row.children : undefined;

  if (!cols) return;

  for (let i = 0; i < cols.length - 1; i++) {
    const divider = createDivider(thead.offsetHeight);
    if (cols[i].getElementsByClassName("columnSelector").length === 0)
      cols[i].appendChild(divider);
    cols[i].style.position = "relative";
    setListeners(divider);
  }
};

export const Table = ({ children, ...args }: TableProps) => {
  const { fullWidth, overflow } = args;

  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (tableRef.current) resizableGrid(tableRef.current);
  }, [tableRef]);

  const content = useMemo(
    () => (
      <Container ref={tableRef} {...args}>
        {children}
      </Container>
    ),
    [tableRef, children, args]
  );

  if (overflow)
    return <OverflowTable fullWidth={fullWidth}>{content}</OverflowTable>;

  return content;
};

export default Table;
