"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.SESSION_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(new Date(Date.now() + 60 * 60 * 24 * 7 * 1000))
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    //console.log("Failed to verify session");
  }
}

export async function getSteps() {
  const session = cookies().get("st")?.value;
  if (!session) return { data: { step: 1, completedSteps: [] } };
  return await decrypt(session);
}

export async function setSteps(step: number, completedSteps: Array<number>) {
  const data = { step: step, completedSteps: completedSteps };
  const expires = new Date(Date.now() + 60 * 60 * 24 * 1 * 1000);
  const session = await encrypt({ data, expires });
  cookies().set("st", session, { expires, httpOnly: true });
  return;
}

export async function getUserTrancPin() {
  const session = cookies().get("utp")?.value;
  if (!session) return
  return await decrypt(session);
}

export async function setUserTracPin(pin: string) {
  const data = pin;
  const expires = new Date(Date.now() + 60 * 60 * 24 * 14 * 1000);
  const session = await encrypt({ data, expires });
  cookies().set("utp", session, { expires, httpOnly: true });
  return;
}

export async function updateUserTracPin(request: NextRequest) {
  const session = request.cookies.get("utp")?.value;
  if (!session) return;
  const parsed = await decrypt(session);
  const res = NextResponse.next();
  res.cookies.set({
    name: "utp",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 60 * 24 * 14 * 1000),
  });
  return res;
}

export async function clearRegCookies() {
  cookies().set("utp", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("YS")?.value;
  if (!session) return undefined;
  return await decrypt(session);
}

export async function createSession(data: any) {
  const activeSession = await getSession();
  const user = activeSession?.user ? { ...activeSession.user, ...data } : data;
  const expires = new Date(Date.now() + 60 * 60 * 24 * 7 * 1000);
  const session = await encrypt({ user, expires });

  cookies().set("YS", session, { expires, httpOnly: true });
  return;
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("YS")?.value;
  if (!session) return;

  const parsed = await decrypt(session);

  // parsed.expires = new Date(Date.now() + 60 * 60 * 24 * 7 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "YS",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000),
  });
  return res;
}

export async function logout() {
  cookies().set("YS", "", { expires: new Date(0) });
}
