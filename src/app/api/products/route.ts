

// get, post, put, patch, delete, option, header (http method)

import { NextResponse } from "next/server";

export async function GET(){
  // logic fetch api 
  const response = await fetch(`${process.env.DUMMY_BASE_URL}/products`);
  // return response data by convert from json to js object 
  const productResponse = await response.json();
  
  return NextResponse.json(productResponse);
}