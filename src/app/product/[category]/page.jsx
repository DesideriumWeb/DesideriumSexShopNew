"use client";
import React from "react";
import useGetProductCategory from "@/hooks/UseGetProduct/useGetProductCategory";
import DetailsProduct from "@/components/DetailsProduct";

const Product = ({ params }) => {
  const { category } = params;
  const { data: products, loading, error } = useGetProductCategory(category);
  const numberFormat = (number) => {
    return Intl.NumberFormat().format(number);
  };

  return (
    <>
      <div className="container mx-auto min-h-screen bg-white text-gray-900 py-1 p-4 sm:p-10 flex justify-center justify-items-center items-center">
        {loading ? (
          <div
            role="status"
            className="flex justify-center justify-items-center items-center place-items-center m-52"
          >
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-20 h-20 ml-3 text-gray-200 animate-spin dark:text-gray-600 fill-[#9806A9]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="text-black font-semibold mx-2 ">
                Cargando...
              </span>
            </div>
          </div>
        ) : (
          <div className="container mx-auto">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-[#9806A9]">
              Nuestros Productos
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products &&
                products[0].map((item, key) => (
                  <div
                    key={key}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-[#9806A9] hover:border-opacity-0 transition-shadow duration-300 text-xs sm:text-lg flex flex-col justify-between"
                  >
                    <div>
                      <img
                        src={item.imagePath[0]}
                        alt={item.name}
                        className="mx-auto h-48 w-48 sm:h-72 sm:w-72 mb-2 object-cover"
                      />
                      <h2 className="text-sm font-semibold">{item.title}</h2>
                      <p className="text-gray-900 font-semibold mb-2">
                        $ {numberFormat(item.precio)}
                      </p>
                    </div>
                    <div>
                      <DetailsProduct product={item} params={params} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
