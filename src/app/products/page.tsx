

import { ProductCardComponent } from '@/components/products/ProductCardComponent'
import { Suspense } from 'react'

// cannot using async/await keyword 
// promise chain 
const getPosts = () =>
  fetch('https://dummyjson.com/products')
    .then(data => data.json())//convert from json to js object
    .then(blogs => blogs.products) //return js object from then above
    .catch(error => error) // promise rejected

console.log(`==> getPost: `, getPosts())

export default function ProductPage() {
  // Don't await the data fetching function
  const posts = getPosts()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductCardComponent posts={posts}/>
    </Suspense>
  )
}