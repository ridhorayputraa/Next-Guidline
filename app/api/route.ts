// Route handler berguna untuk nge handle Request API
import { NextResponse, NextRequest } from "next/server";

export const GET = (req: NextRequest) => {
  //   dummy
  const dateTime = new Date();

  return NextResponse.json({ dateTime });
};



export const POST = (req: NextResponse) => {
  //   dummy
  const dateTime = new Date();

  return NextResponse.json({ dateTime });
};
