import React, {useContext} from 'react'
import {GlobalState} from '../../ProductsAPI/GlobalState'
import { ProductItem } from './ProductItem'
const Products = () => {

  const state = useContext(GlobalState)
  const [products]  = state.productAPI.products

  return (
    <>
    <div className='products'>
      {
        products.map(product => {
          return <ProductItem key={product.id} product={product} />
        })
      }
    </div>
    </>
  )
}

export default Products
