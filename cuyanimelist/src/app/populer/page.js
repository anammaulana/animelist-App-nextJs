import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  return (
    <>
      <Header
        title="Anime Paling Populer"
        linkHref="/populer"
        linkTitle="Lihat Semua"
      />
      <AnimeList api={topAnime} />
    </>
  );
};

export default Home;
