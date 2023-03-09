import dynamic from "next/dynamic";
import Image from "next/image";
import data from "../utils/data";
import Link from "next/link";
import { useRouter } from "next/router"
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });

export default function Home() {
  const router = useRouter()
  return (
    <Layout title="Home">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-between items-center flex-wrap m-4">
            {data.products.map((product, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full text-white my-3 mr-2 border border-white">
                <Link href={`/product/${product.slug}`} className="block relative h-48 rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    className=" content-center object-contain w-full h-full block"
                    src={product.image}
                    width={100}
                    height={100}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-white font-bold title-font text-lg">
                    {product.brand}
                  </h2>
                  <p className="mt-1">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
