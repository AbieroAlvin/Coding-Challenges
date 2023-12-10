import CryptoCard from "./CryptoCard";

const CryptoList = ({ coinsData }) => {
  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-12 mt-6">
      {coinsData.map((coin, index) => {
        return (
          <CryptoCard
            key={index}
            image={coin.image}
            name={coin.name}
            price={coin.current_price}
          />
        );
      })}
    </div>
  );
};

export default CryptoList;
