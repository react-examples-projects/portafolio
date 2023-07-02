import { useState, useEffect } from "react";

export default function usePagination(source) {
  const ITEMS_PER_PAGE = 6;

  if (!Array.isArray(source)) {
    throw new TypeError("The source is not an instance of array type");
  }

  const IS_LARGE_PAGES = source.length > ITEMS_PER_PAGE;
  const pages = IS_LARGE_PAGES
    ? Math.ceil(source.length / ITEMS_PER_PAGE)
    : 1;

  const [data, setData] = useState(source);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const initialIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = initialIndex + ITEMS_PER_PAGE;

    setData(source.slice(initialIndex, endIndex));
  }, [currentPage, source]);

  const nextPage = () => {
    if (IS_LARGE_PAGES && currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (IS_LARGE_PAGES && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    nextPage,
    previousPage,
    data,
    pages,
    currentPage,
    ITEMS_PER_PAGE,
  };
}
