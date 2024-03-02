

const Card = ({image}) => {
  return (
    <div className="bg-white max-w-xs mx-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 my-4">
      <img src={image} alt="Product" className="w-full h-48 object-cover" />
    </div>
  );
};

export default Card;
