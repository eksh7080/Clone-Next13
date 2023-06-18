import Image from 'next/image';

async function getMovie(movieId) {
  const res = await fetch(
    `
          https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
  );
  return await res.json();
}

const Movie = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  console.log(movie, 'aaaaaaaaaa');

  return (
    <section className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          priority
          placeholder="blur"
          blurDataURL="/spinning-circles.svg"
          className="rounded-lg"
          alt="Movie Poster"
          style={{ maxWidth: '100%', height: '100%' }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview: </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Movie;
