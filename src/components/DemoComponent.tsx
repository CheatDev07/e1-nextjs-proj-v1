'use client'

import { useEffect, useState } from "react"

export default function DemoComponent() {
   // fetch api route 
  const [data, setData] = useState<string>();
  useEffect(()=> {
    async function fetchData(){
        const response = await fetch('http://localhost:3000/api/demo');
  const data = await response.json();
  console.log("===> Data: ", data)
  setData(data);
    }
    fetchData()
  })

  return (
    <div>
      

    </div>
  )
}
