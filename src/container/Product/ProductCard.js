import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ id, imageSrc, name, price, width, height }) => {
  return (
    <Link className="bg-white" href={`/ProductDetail/${id}`}>
      <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={name}
          className="max-h-full object-contain"
          width={width}
          height={height}
        />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-gray-900 text-center">
        {name}
      </h3>

      <p className="mt-2 text-md text-gray-700 text-center">${price}</p>
    </Link>
  );
};

export default ProductCard;
