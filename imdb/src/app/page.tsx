// 13 버전에서 SSR을 사용할떄는 따로 SSR 함수 예약어를 사용하지 않아도 된다.

import Results from '@/components/Results';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  // Next는 fetch에서 사용할수 있는 옵션이 다름
  // 지금 사용한 옵션은 캐싱해주는것으로 사용자가 API를 한 번 호출하면 옵션에 지정한 시간동안은 다시 호출하지 않는다.
  // 지정한 시간동안은 최신화되지 않음
  const gets = await fetch(
    `
  https://api.themoviedb.org/3/${
    genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
  }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 86400 } },
  );

  if (!gets.ok) {
    throw new Error('Failled to fetch data');
  }

  const data = await gets.json();
  const res = data.results;

  return (
    <section>
      <Results res={res} />
    </section>
  );
}
