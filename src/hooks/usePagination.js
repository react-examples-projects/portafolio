import { useState, useEffect } from "react";
const ITEMS_PER_PAGE = 6;

export default function usePagination(
  source = [],
  itemsPerPage = ITEMS_PER_PAGE
) {
  if (!Array.isArray(source)) {
    throw new TypeError("The source is not an instance of array type");
  }

  const IS_LARGE_PAGES = source.length > itemsPerPage;
  const pages = IS_LARGE_PAGES ? Math.ceil(source.length / itemsPerPage) : 1;
  const [data, setData] = useState(source);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (source.length > itemsPerPage) {
      const initialIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = initialIndex + itemsPerPage;

      setData(source.slice(initialIndex, endIndex));
    } else {
      setData(source);
    }
  }, [currentPage, source, itemsPerPage]);

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
    ITEMS_PER_PAGE: itemsPerPage,
  };
}
