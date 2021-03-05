import React from 'react'
import { Grid } from '@material-ui/core'

import Product from '../Product/Product'

const products = [
    {id: 1, name: 'Shoes', description: 'Great Shoes', price:'$10', image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F02%2Fnike-top-10-best-selling-sneakers-list-2019-01.jpg?quality=95&w=1170&cbr=1&q=90&fit=max'},
    {id: 2, name: 'Phone', description: 'Mobile Phone', price:'$10', image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/22733005/1416948901.jpg'}
]

const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map(product => (
                   <Grid irem key={product.id} xs={12} sm={6} md={4} lg={3}>
                       <Product product={product} />
                   </Grid> 
                ))}
                
            </Grid>
        </main>
    )
}

export default Products
