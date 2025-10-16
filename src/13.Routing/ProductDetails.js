import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  var {id} = useParams()
  return (
    <div>
      <h3>ProductDetails Com: id:{id}</h3>
      <h4>Name: </h4>
      <h4>Price: </h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, labore maiores alias fuga architecto, consequuntur doloremque rerum beatae deleniti accusamus exercitationem, rem quo minima quasi id nam eveniet repellat ullam. Non dignissimos voluptates reiciendis sapiente a dolor assumenda ea culpa eos. Vel illo odio saepe iure assumenda ad illum mollitia, incidunt rerum alias, molestias sint totam tempora voluptas porro, provident consectetur ullam animi laboriosam unde dolores laudantium obcaecati! Repudiandae ducimus excepturi explicabo sit placeat id, magnam laboriosam deleniti aliquid! Ipsum cupiditate assumenda fugiat cum soluta hic labore animi possimus minus sapiente quam voluptatibus voluptate nesciunt, magnam, eum accusantium rem placeat.</p>

    </div>
  )
}

export default ProductDetails