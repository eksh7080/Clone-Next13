const WebSearchPage = async ({ searchParams }) => {
  const res = await fetch(
    ` https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`,
  );

  const data = await res.json();
  const result = data.items;

  return <>{result && result.map((list) => <h1>{list.title}</h1>)}</>;
};

export default WebSearchPage;
