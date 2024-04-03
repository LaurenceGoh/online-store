import type { MetaFunction } from "@remix-run/node";
import Nav from "~/components/navbar";
export const meta: MetaFunction = () => {
  return [
    { title: "Online Store" },
    { name: "description", content: "This is an online store" },
  ];
};
import Products from "~/components/products/products";
import { retrieveAllProducts } from "~/services/products";
import { useLoaderData } from "@remix-run/react";
export async function loader() {
  let products = await retrieveAllProducts();
  return products;
}

export default function Index() {
  const {products} = useLoaderData<typeof loader>();
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Nav/>
      <Products products={products}/>
    </div>
  );
}
