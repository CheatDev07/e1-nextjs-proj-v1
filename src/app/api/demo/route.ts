import { NextResponse } from "next/server";

// NextResponse, NextRequest
export function GET(res: NextResponse){
  // person object 
  const person = {
    'firstName': 'Kudo',
    'lastName': 'Maya',
    'age': 10,
    'isSingled': true
  }
  console.log(`==> Log Data: `, person.age);

  return NextResponse.json(person)
}


