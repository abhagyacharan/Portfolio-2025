// app/hooks/usePagination.ts (Client Hook)
"use client";

import { useMemo, useState } from "react";

type UsePaginationParams<T> = {
  items: T[];
  perPage: number;
};

export function usePagination<T>({ items, perPage }: UsePaginationParams<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(items.length / perPage)), [items.length, perPage]);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [currentPage, perPage, items]);

  const pageNumbers = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1), [totalPages]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return { currentPage, totalPages, pageItems, pageNumbers, goToPage };
}
