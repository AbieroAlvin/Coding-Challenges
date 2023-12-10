const CryptoCard = ({ image, name, price }) => {
  return (
    <div className="bg-white p-2 rounded-lg hover:scale-105 hover:bg-cyan-100 cursor-pointer">
      <div className="image flex items-center justify-center">
        <img src={image} alt={name} className="w-[80px] h-[80px]" />
      </div>
      <div className="info mt-2 px-2">
        <h2 className="font-semibold">{name}</h2>
        <h3 className="text-[14px] ">${price.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default CryptoCard;
