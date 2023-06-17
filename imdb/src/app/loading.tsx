import Spinner from '@/components/Spinner';

// 로딩 할 때 해당 페이지 요소가 표시됨
const loading = () => {
  return (
    <section className="flex justify-center">
      <Spinner />
    </section>
  );
};

export default loading;
