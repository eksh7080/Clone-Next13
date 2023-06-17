// 로딩 할 때 해당 페이지 요소가 표시됨
const loading = () => {
  return (
    <article className="flex justify-center ">
      <img src="/spinning-circles.svg" alt="spinner" className="h-96" />
    </article>
  );
};

export default loading;
