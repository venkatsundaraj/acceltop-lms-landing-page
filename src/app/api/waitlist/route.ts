import { emailValidator } from "@/lib/validation/email-validation";
import { db } from "@/server/db/db";
import { waitListTable } from "@/server/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const validatedBody = emailValidator.parse(body);
    if (!validatedBody) {
      throw new Error("Something went wrong");
    }

    const value = await db.insert(waitListTable).values(validatedBody);

    if (!value) {
      throw new Error("Something went wrong");
    }

    return NextResponse.json({
      message: "Message Received Successfully",
      status: 200,
      data: value,
    });
  } catch (err) {
    console.log(err);
  }
}
