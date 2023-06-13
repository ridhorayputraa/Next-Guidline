// Route handler berguna untuk nge handle Request API
import { NextResponse, NextRequest } from "next/server";

export const GET = (req: NextRequest) => {
    return NextResponse.json({ message: "Hello world" });
};
