import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CryptoList from "./CryptoList";
import axios from "axios";

const Cryoto2 = () => {
  const [coinsData, setCoinsData] = useState([]);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 8;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = coinsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(coinsData.length / itemsPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % coinsData.length;
    setItemOffset(newOffset);
  };

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoinsData(response.data);
    });
  }, []);
  return (
    <div className="flex flex-col w-full h-[90vh] items-center bg-gray-900 py-[20px]">
      <h1 className="text-white text-3xl text-center">Crypto Gallery</h1>
      <CryptoList coinsData={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-link border-white border-[2px] rounded-md px-2 py-1 hover:bg-cyan-500 hover:text-black bg-black"
        activeLinkClassName="active text-blue-500 bg-white "
        previousLinkClassName="page-link hover:text-purple-400"
        nextLinkClassName="page-link hover:text-purple-400"
        className="flex text-white gap-4 mt-12 items-center justify-center font-medium"
      />
    </div>
  );
};

export default Cryoto2;
