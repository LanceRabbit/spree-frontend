import { React } from 'react';
import noImage from '../images/no_image.png';

const ProductItem = (props) => {
  console.log("props",props)
  return (
    <div className="px-3 mb-8">
      <div className="relative md:h-full lg:h-full">
        <div
          id={`product_${props.id}`}
          className="bg-white shadow-md rounded overflow-hidden block h-full hover:shadow-lg"
        >
          <img
            src={noImage}
            alt="NoImage"
            className="relative w-full h-48 bg-primary-200 text-center overflow-hidden text-0 leading-48"
          />
          <div className="p-4">
            <h2 className="text-sm font-bold text-gray-700 h-6 truncate">
              {props.attributes.name}
            </h2>
            <h3 className="text-xl font-bold text-gray-800 mt-1 truncate">
              {props.attributes.price}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;