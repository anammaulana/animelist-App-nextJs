import Link from "next/link"
import AnimeList from "@/components/AnimeList"

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()
 
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center p-4">
        <h1 className="md:text-2xl text-md font-mono font-bold">Paling Populer Anime List</h1>
        <Link href="/populer" className="text-2xl underline hover:text-indigo-500 transition-all">See All..</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3  grid-cols-2 gap-4 px-4">
      {anime.data.map(data => {
        return (
          <div key={data.mal_id} className="shadow-2xl">
            <AnimeList
              id={data.mal_id}
              title={data.title_japanese}
              images={data.images.webp.image_url}
            />
          </div>
        );
      })}
      </div>
    </>
  )
}

export default Home