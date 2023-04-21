import React from "react";
import Link from "next/link";
const tshirts = ({ data }) => {
  console.log(data);
  const r="red";
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 border-black">
            {Object.keys(data).map((item) => {
              return (
                <div key={data[item]._id}>
                  <Link href={`/products/${data[item].slug}`}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={data[item].img}
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-full w-full object-cover object-top group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {data[item].title}
                    </h3>
                    <div className="flex">
                      {data[item].size.map((itemm) => {
                        return (
                          <p className="mt-1  font-medium text-gray-900">
                            {itemm}&nbsp;
                          </p>
                        );
                      })}
                    </div>
                    <div className="flex">
                      {data[item].color.map((itemm) => {
                        return (
                          <p className={`mt-1  font-medium text-gray-900 bg-${itemm.toLowerCase()}-800`}>
                sdf
                          </p>
                        );
                      })}
                    </div>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      ₹{data[item].price}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/getproduct");
  const d = await res.json();
  const data = d["p"];
  // console.log(data);
  return {
    props: {
      data,
    },
  };
}
export default tshirts;
