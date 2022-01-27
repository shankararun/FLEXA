import React, {useContext} from 'react'
import {GlobalState} from '../../ProductsAPI/GlobalState'
import { ProductItem } from './ProductItem'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const Products = () => {

  const state = useContext(GlobalState)
  const [products]  = state.productAPI.products

  return (
    <Container>
    <Grid container spacing={2}>
      {
        products.map(product => {
          return (
          <Grid item key={product.id} xs={8} md={6} lg={3}>
          <ProductItem key={product.id} product={product} />
          </Grid>
          )
        })
      }
    </Grid>
    </Container>
  )
}

export default Products
