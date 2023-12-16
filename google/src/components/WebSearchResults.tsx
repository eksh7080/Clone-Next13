import Link from 'next/link';
import HTMLReactParser from 'html-react-parser';
import PaganationButton from './PaganationButton';

interface IProps {
  result: any;
}

const WebSearchResults = ({ result }: IProps) => {
  return (
    <section className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {result.searchInformation.formattedTotalResults} result ({result.searchInformation?.formattedSearchTime} seconds)
      </p>
      {result.items?.map((res, index) => (
        <div className="mb-8 max-w-xl" key={index}>
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={res.link}>
              {res.formattedUrl}
            </Link>
            <Link className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800" href={res.link}>
              {res.title}
            </Link>
          </div>
          <p className="text-gray-600">{HTMLReactParser(res.htmlSnippet)}</p>
        </div>
      ))}
      <PaganationButton />
    </section>
  );
};
export default WebSearchResults;
