import Results from '@/components/Results';

async function getSearchList(params) {
  const res = await fetch(
    `
    https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${params.searchTerm}&language=en-US`,
  );

  if (!res.ok) {
    throw new Error('에러 에러 에러');
  }
  return await res.json();
}

const SearchPage = async ({ params }) => {
  const res = await getSearchList(params);
  const results = res.results;

  return (
    <section>
      검색결과
      {results && results.length === 0 && <h1 className="text-center pt-6">검색 결과가 없습니다.</h1>}
      {results && <Results res={results} />}
    </section>
  );
};

export default SearchPage;
