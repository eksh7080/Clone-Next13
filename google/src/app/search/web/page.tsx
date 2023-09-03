import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';

const WebSearchPage = async ({ searchParams }) => {
  const res = await fetch(
    ` https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`,
  );

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  const data = await res.json();

  const result = data.items;

  if (!result) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">Try searching for something else or go back to the homepage.</p>
        <Link href="/" className="text-blue-500">
          Home
        </Link>
      </div>
    );
  }
  return <>{result && <WebSearchResults result={data} />}</>;
};

export default WebSearchPage;
