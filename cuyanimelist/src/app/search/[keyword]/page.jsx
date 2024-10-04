import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import PeopleList from "@/components/PeopelList";


const Page = async ({ params }) => {
  // console.log(params.keyword)
  const { keyword } = params
  const decodeKeyword = decodeURI(keyword)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
    );
  const searchAnime = await response.json();

    const responsePeop = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/people?q=${keyword}`
    );
  const searchPeople = await responsePeop.json();
  return (
    <>
      <section>
        <Header title={`Pencarian Untuk Anime ${decodeKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
      <section>
        <Header title={`Pencarian Untuk People ${decodeKeyword}...`} />
        <PeopleList api={searchPeople} />
      </section>
    </>
  );
};

export default Page;
