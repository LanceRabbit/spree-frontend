import './App.css';
import './tailwind.output.css';
import ProductList from './product/ProductList';

function App() {
  return (
    <div className="sm:max-w-1xl lg:max-w-5xl xl:max-w-2xl mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      {/* <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          Tailwind and Create React App
        </h1>
        <p className="text-base text-gray-700 leading-normal">
          Building apps together
        </p>
      </div> */}
        <ProductList/>
    </div>
  );
}

export default App;
