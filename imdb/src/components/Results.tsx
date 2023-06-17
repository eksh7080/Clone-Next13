const Results = ({ res }) => {
  return (
    <section>
      {res.map((db) => (
        <div key={db.id}>{db.original_title}</div>
      ))}
    </section>
  );
};

export default Results;
