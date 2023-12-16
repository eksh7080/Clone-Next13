import Link from 'next/link';
import HTMLReactParser from 'html-react-parser';
import PaganationButton from './PaganationButton';

interface IProps {
  result: any;
}

const ImageSearchResults = ({ result }: IProps) => {
  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {result.items?.map((res, index) => (
          <div className="mb-8" key={index}>
            <div className="group">
              <Link href={res.image.contextLink}>
                <img src={res.link} alt={res.title} className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow" />
              </Link>
              <Link href={res.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">{res.title}</h2>
              </Link>
              <Link href={res.image.contextLink}>
                <p className="group-hover:underline text-gray-600">{res.displayLink}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaganationButton />
      </div>
    </div>
  );
};
export default ImageSearchResults;
