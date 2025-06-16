import { useEffect, useState } from "react";
import { Container, LeftIcon, PageButton, RightIcon } from "./styles";

export interface PaginationProps {
  page: number;
  total?: number;
  limit?: number;
  onChange: (currentPage: number) => void;
}

const getRange = (from: number, to: number) =>
  Array.from(new Array(to + 1 - from), (_, k) => k + from);

const getPageRange = (totalPerPage: number, currentPage: number) => {
  const neighbours = 2; // Number of elements next to the selected page
  const items = neighbours * 2 + 3; // Total items in pagination
  const blocks = items + 2; // All items including the ellipsis

  if (totalPerPage > blocks) {
    const start = Math.max(2, currentPage - neighbours);
    const end = Math.min(totalPerPage - 1, currentPage + neighbours);

    let pages = getRange(start, end);

    const hasOnTheLeft = start > 2;
    const HasOnTheRight = totalPerPage - end > 1;
    const totalEscape = items - (pages.length + 1);

    switch (true) {
      case hasOnTheLeft && !HasOnTheRight: {
        const extra = getRange(start - totalEscape, start - 1);
        pages = [-1, ...extra, ...pages];
        break;
      }

      case !hasOnTheLeft && HasOnTheRight: {
        const extra = getRange(end + 1, end + totalEscape);
        pages = [...pages, ...extra, -1];
        break;
      }

      case hasOnTheLeft && HasOnTheRight:
      default: {
        pages = [-1, ...pages, -1];
        break;
      }
    }

    return [1, ...pages, totalPerPage];
  }

  return getRange(1, totalPerPage);
};

export const Pagination = ({
  page = 1,
  total = 0,
  limit = 5,
  onChange,
}: PaginationProps) => {
  const [totalPage, setTotalPage] = useState(1);
  const [range, setRange] = useState<number[]>([]);

  useEffect(() => {
    const currentTotalPage = Math.ceil(total / limit);
    setTotalPage(currentTotalPage);
    setRange(getPageRange(currentTotalPage, page));
  }, [total, limit, page, setRange]);

  return (
    <Container>
      <PageButton
        disabled={page === 1}
        onClick={() => page > 1 && onChange(page - 1)}
      >
        <LeftIcon />
      </PageButton>
      {range?.map((currentPage, index) =>
        currentPage !== -1 ? (
          <PageButton
            key={index}
            isActive={currentPage === page}
            onClick={() => currentPage !== page && onChange(currentPage)}
          >
            {currentPage}
          </PageButton>
        ) : (
          <PageButton key={index} disabled>
            ...
          </PageButton>
        )
      )}
      <PageButton
        disabled={page === totalPage}
        onClick={() => page < totalPage && onChange(page + 1)}
      >
        <RightIcon />
      </PageButton>
    </Container>
  );
};

export default Pagination;
