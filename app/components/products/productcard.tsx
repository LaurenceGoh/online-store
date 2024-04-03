import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";
import { Product } from '~/types';
interface ProductData {
  product : Product
}
const ProductCard : React.FC<ProductData> = ({product}) => {
  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed" , product.title)}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              src={product.thumbnail}
              className="w-full object-scale-down h-[250px]"
              alt={product.title}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{product.title}</b>
            <p className="text-default-500 font-bold">${product.price}</p>
          </CardFooter>
        </Card>
  )
}

export default ProductCard
