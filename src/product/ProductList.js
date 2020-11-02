import { React, useEffect, useState, useCallback } from "react";
import { client } from '../api/index';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [page, setPage] = useState(1)

  const [products, setProducts] = useState([]);

  console.log("invoke function component");
  useEffect(() => {
    console.log("execute function in useEffect");
    const fetchData = async () => {
      const data = await Promise.all([getData()])
       console.log("data", data);
      setProducts(...data);
    }
    fetchData();
  }, []);

  const getData = useCallback(async ()=>{
     const res = await client.products.list({
        include: "default_variant",
        page: page,
      });
      if (res.isSuccess()) {
        console.log("getData", res.success());
        return res.success().data;
      }
  }, [])

  return (
    <div className="container mx-auto flex mt-4 px-6 mb-10">
      <div className="flex flex-wrap mt-4 -mx-3">
        {products.map(product => <ProductItem key={product.id} {...product}/>)}
      </div>
    </div>
  );
}

export default ProductList;