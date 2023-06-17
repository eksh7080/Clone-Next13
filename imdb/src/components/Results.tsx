import Card from './Card';

const Results = ({ res }) => {
  return (
    <section className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {res.map((items) => (
        <Card items={items} />
      ))}
    </section>
  );
};

export default Results;
