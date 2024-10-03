import Image from "next/image";
import Link from "next/link";

const PeopleList = ({ api }) => {
  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-3  grid-cols-2 gap-4 px-4">
        {api.data &&
          api.data.map(
            (
              anime // Check if data exists before mapping
            ) => (
              <Link
                href={`/${anime.mal_id}`}
                className="cursor-pointer"
                key={anime.mal_id}
              >
                <Image
                  src={anime.images.jpg.image_url}
                  alt=""
                  width={350}
                  height={350}
                  className="w-full max-h-64 object-cover"
                />
                <h3 className="font-bold md:text-xl text-md p-4">
                  {anime.name}
                </h3>
              </Link>
            )
          )}
      </div>
        {!api.data && (
          <div className="min-h-screen max-w-xl mx-auto flex items-center justify-center gap-4">
            <div className="loading text-color-accent"></div>
          </div>
        )}{" "}
        {/* Display loading message if no data */}
    </>
  );
};

export default PeopleList;
