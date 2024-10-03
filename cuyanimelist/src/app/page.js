import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import CharacterList from "@/components/CharacterList";
import PeopleList from "@/components/PeopelList";

const Page = async () => {
  const responseTop = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await responseTop.json();

  const responseChar = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters?limit=8`
  );
  const topCharacter = await responseChar.json();

  const responsePeop = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/people?limit=8`
  );
 

  const topPeople = await responsePeop.json();

  return (
    <>
      <section>
        <Header
          title="Anime Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>

      {/* <section>
        <Header
          title="Character Paling Populer"
          linkHref="/character"
          linkTitle="Lihat Semua"
        />
        <CharacterList api={topCharacter} />
      </section>

      <section>
        <Header
          title="People Paling Populer"
          linkHref="/people"
          linkTitle="Lihat Semua"
        />
        <PeopleList api={topPeople} />
      </section> */}
    </>
  );
};

export default Page;
