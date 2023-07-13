'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

const Search = () => {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }

    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const res = await fetch(`https://random-word-api.herokuapp.com/word`)
      .then((req) => req.json())
      .then((data) => data[0]);
    if (!res) {
      setRandomSearchLoading(false);
      return;
    }
    router.push(`/search/web?searchTerm=${res}`);
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within::shdow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3 transition-shadow" />
        <input type="text" className="flex-grow focus:outline-none" onChange={(e) => setInput(e.target.value)} value={input} />
        <BsFillMicFill className="text-lg " />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button onClick={randomSearch} className="btn flex items-center justify-center" disabled={randomSearchLoading}>
          {randomSearchLoading ? (
            <img src="spinning-circles.svg" alt="spinner" className="h-6 text-center disabled:opacity-80" />
          ) : (
            'I am legend'
          )}
        </button>
      </div>
    </>
  );
};

export default Search;
