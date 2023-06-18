import Image from 'next/image';

// 로딩 할 때 해당 페이지 요소가 표시됨
const loading = () => {
  return (
    <article className="flex justify-center ">
      <Image src="/spinning-circles.svg" alt="spinner" className="h-96" width={96} height={96} priority />
    </article>
  );
};

export default loading;
