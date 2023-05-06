import React from "react";
import Link from "next/link";
const hoodies = ({ data }) => {
  console.log(data);
  // const r = "red";

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">data</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 border-black">
            {data.map((item) => {
              const arr = item.variant.split(";");
              let colour = [];
              let size = [];
              let img = [];
              arr.map((a) => {
                const b = a.split(",");
                colour.push(b[0]);
                size.push(b[1]);
                img.push(b[2]);
              });
              console.log(img[0]);
              return (
                <div key={item._id}>
                  <Link href={`/products/${item.title}`}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={img[0]}
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-full w-full object-cover object-top group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {item.title}njdskfljlksdj
                    </h3>
                    <div className="flex">
                      {size.map((itemm) => {
                        return ( 
                          <p className="mt-1  font-medium text-gray-900">
                            {itemm}&nbsp;
                          </p>
                        );
                      })}
                    </div>

                    <p className="mt-1 text-lg font-medium text-gray-900">
                      ₹{item.price}
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
  const res = await fetch("http://localhost:3000/api/getproduct",
  {
    method: "POST",
    body: JSON.stringify({ category: "Hoodies" }),
    headers: {
      "Content-Type": "application/json"
    },
  });
  const d = await res.json();
  const data = d["products"];
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
export default hoodies;
