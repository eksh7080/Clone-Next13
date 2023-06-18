'use client';
// 13버전 app 디렉토리 안에서 useRouter 사용하려면 next/router이 아니라 next/navigation로 마이그레이션 된 버전을 사용해야함
// https://nextjs.org/docs/messages/next-router-not-mounted
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBox = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form className="flex max-w-6xl mx-auto justify-between items-center px-5" onSubmit={(e) => onSubmitSearch(e)}>
      <input
        type="text"
        placeholder="Search keywords"
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="submit" className="text-amber-500 disabled:text-gray-400" disabled={!search}>
        검색
      </button>
    </form>
  );
};

export default SearchBox;
