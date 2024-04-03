import React from 'react'
import type { Product } from '~/types'
import ProductCard from './productcard'
interface ProductsProps {
    products : Product[]
}
const Products : React.FC<ProductsProps> = ({products}) => {
  return (
    <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 p-24">
      {
        products.map((product : Product)=> (
            <ProductCard product={product} key={product.id}/>
        ))
      }
    </div>
  )
}

export default Products
