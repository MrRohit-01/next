
import { NextRequest, NextResponse } from "next/server";

export function POST(req: NextRequest) {
  const body = req;
  console.log(body);
  return NextResponse.json({message: 'your logged in user data is here'});
}
