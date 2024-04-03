import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { Product } from "~/types";
import { useNavigate } from "@remix-run/react";

interface ProductData {
  product: Product;
}

const ProductCard: React.FC<ProductData> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => {
        console.log("item pressed", product.title);
        navigate(`/products/${product.id}`);
      }}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          src={product.thumbnail}
          className="w-full object-scale-down h-[300px]"
          alt={product.title}
        />
      </CardBody>
      
      <CardFooter className="text-small justify-between">
        <b>{product.title}</b>
        <p className="text-default-500 font-bold">${product.price}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
