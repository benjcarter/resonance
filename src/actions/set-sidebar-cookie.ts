"use server";

import { cookies } from "next/headers";

export async function setSidebarCookie(
  name: string,
  value: string,
  path: string = "/",
  maxAge: number = 60 * 60 * 24 * 7,
) {
  const cookieStore = await cookies();

  cookieStore.set(name, value, {
    path,
    maxAge,
  });
}
