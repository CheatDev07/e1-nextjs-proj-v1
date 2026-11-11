'use client'

import { use } from 'react'

export default function Posts({
  posts,
}: {
  posts: Promise<{ id: string; title: string, body:string, category:string; images:string[], price: number }[]>
}) {
  const allPosts = use(posts)

  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>
          {post.category}
          <img 
          src={post.images[0]} 
          alt="" 
          width={200} 
          height={200} />
          
          {post.title}
          {post.price}
          </li>
      ))}
    </ul>
  )
}