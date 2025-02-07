import { getSession } from "~/auth";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();

  return (
    <>
      {!session && <Link href="/api/auth/signin">Login</Link>}
      {!!session && <h1>Welcome {session.user.studentId}</h1>}
    </>
  );
}
