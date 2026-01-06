import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { username, email, password } = body;

  // Giả lập delay
  await new Promise((r) => setTimeout(r, 1000));

  // Giả lập lỗi
  if (username === "error") {
    return NextResponse.json(
      { message: "Có lỗi xảy ra khi đăng ký. Vui lòng thử lại sau!" },
      { status: 400 }
    );
  }

  // Thành công
  return NextResponse.json(
    {
      message: "Đăng ký thành công!",
      user: { username, email },
    },
    { status: 200 }
  );
}
