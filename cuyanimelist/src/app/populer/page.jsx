"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1); // Menyimpan total halaman dari API

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const allAnime = await response.json();

    setData(allAnime); // Asumsi `data` ada di objek `allAnime.data`
    setTotalPages(allAnime.pagination?.last_visible_page || 1); // Mengambil total halaman dari API
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      <HeaderMenu />
      <AnimeList api={data} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Page;
