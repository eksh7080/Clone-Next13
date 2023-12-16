'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface IProps {
  title: string;
  param: string;
}

const NaverbarItem = ({ title, param }: IProps) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <section>
      <Link
        href={`/?genre=${param}`}
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre && genre === param && 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
        }`}
      >
        {title}
      </Link>
    </section>
  );
};

export default NaverbarItem;
