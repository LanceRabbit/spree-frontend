import { React, useEffect, useState } from "react";
import { client } from '../api/index';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [products, setProducts] = useState([]);

  console.log("invoke function component");
  useEffect(() => {
    console.log("execute function in useEffect");
    const fetchData = async () => {
      const res = await client.products.list({
        include: "default_variant",
        page: page,
      });
      console.log("res", res);
      if (res.isSuccess()) {
        const body = res.success();
        setProducts(body.data);
        setTotalPage(body.meta.total_pages);
      }
    };
    fetchData();
  }, [page]);

  const handlePageChange = (e) => {
    const value  = e.target.value;
    console.log("value", e);
    setPage(value);
  };

  return (
    <div className="container mx-auto flex justify-center bg-gray-100 my-10 px-6 rounded-lg shadow-xl">
      <div className="pl-3 w-2/3 xl:w-3/4">
        <nav className="text-base leading-normal text-primary-700">
          <ul className="flex justify-center items-center">
            {Array(totalPage)
              .fill("")
              .map((_, idx) => (
                <li
                  key={idx + 1}
                  className="active cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mt-2 mx-1 py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:outline-none focus:shadow-outline"
                  onClick={handlePageChange}
                  value={idx + 1}
                >
                  {idx + 1}
                </li>
              ))}
          </ul>
        </nav>
        <div className="flex flex-wrap mt-4 -mx-3">
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;