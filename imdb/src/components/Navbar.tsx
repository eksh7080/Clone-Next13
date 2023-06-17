import NaverbarItem from './NaverbarItem';

const Navbar = () => {
  return (
    <section className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NaverbarItem title="Trending" param="fetchTrending" />
      <NaverbarItem title="Top Rated" param="fetchTopRated" />
    </section>
  );
};

export default Navbar;
