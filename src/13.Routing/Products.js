import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  var [products, setProducts] = useState([{id: 1, name: 'Apple'}, {id: 2, name: 'Banana'},{id: 3, name: 'Grapes'}, {id: 4, name: 'Orange'}, {id: 5, name: 'papaya'}])
  return (
    <div>
      <div className='products-list'>
        {
          products.map((product) => {
            return <Link to={`/products/${product.id}`}>{product.name}</Link>
          })
        }
        {/* <Link to='/products/2'>Banana</Link>
        <Link to='/products/3'>Grape</Link>
        <Link to='/products/4'>Orange</Link> */}
      </div>
        <Outlet/>
    </div>
  )
}

export default Products