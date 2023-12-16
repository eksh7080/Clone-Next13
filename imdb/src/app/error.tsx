'use client';
import { useEffect } from 'react';

// 에러가 발생하면 해당 페이지가 표시됨
const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error, '에러');
  }, [error]);

  return (
    <section className="text-center mt-10 ">
      <h1>에러가 발생했다!!</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        다시 해봐
      </button>
    </section>
  );
};

export default Error;
