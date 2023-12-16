import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

const Card = ({ items }) => {
  return (
    <article
      key={items.id}
      className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group"
    >
      <Link href={`/movie/${items.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${items.backdrop_path || items.poster_path}`}
          width={500}
          height={300}
          priority
          placeholder="blur"
          blurDataURL="/spinning-circles.svg"
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          alt="image not available"
          style={{ maxWidth: '100%', height: ' auto' }}
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{items.overview}</p>
          <h2 className="truncate text-lg font-bold">{items.title || items.name}</h2>
          <p className="flex items-center">
            {items.release_date || items.first_air_date} <FiThumbsUp className="h-5 mr-1 ml-3" />
            {items.vote_count}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default Card;
