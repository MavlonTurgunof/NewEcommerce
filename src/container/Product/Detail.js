import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ProductContext } from "../context/ProductContext";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { productDetail, fetchProductDetail } = useContext(ProductContext);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("White");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      fetchProductDetail(id);
    }
  }, [id]);

  useEffect(() => {
    if (productDetail) {
      setSelectedImage(productDetail.images[0]);
    }
  }, [productDetail]);

  if (!productDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4 bg-white text-black h-[700px] py-10">
      <div className="container gap-4 flex items-center max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 flex flex-row items-center justify-center gap-6">
          <div className="border-2 flex items-center justify-center h-[600px] w-full">
            <Image
              src={selectedImage}
              alt={productDetail.title}
              className="object-cover"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            {productDetail.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                className={`w-32 h-32 cursor-pointer border ${
                  selectedImage === image ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(image)}
                width={64}
                height={64}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 md:pl-10 bg-white">
          <h1 className="text-3xl font-bold text-gray-900">
            {productDetail.title}
          </h1>
          <p className="text-gray-600 mt-4">{productDetail.description}</p>

          <div className="flex items-center mt-4">
            <p className="text-yellow-500 text-xl mr-2">
              {productDetail.rating} ★
            </p>
            <p className="text-gray-500">(20 reviews)</p>
          </div>

          <p className="text-2xl font-bold text-gray-900 mt-6">
            ${productDetail.price}
          </p>

          <div className="mt-4">
            <label className="block text-gray-700 font-medium">Color</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="mt-2 border rounded p-2"
            >
              <option>White</option>
              <option>Black</option>
              <option>Red</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-medium">Quantity</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-2 border rounded p-2"
            >
              {[...Array(productDetail.stock).keys()].map((num) => (
                <option key={num} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          <button className="bg-black text-white px-6 py-3 mt-6 w-[50%] rounded hover:bg-gray-800">
            Add to Cart
          </button>

          <div className="flex items-center gap-12 mt-4">
            <p className="text-gray-500">Pay in 21 days</p>
            <p className="text-gray-500">30 Days Return Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
