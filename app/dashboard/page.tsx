import React from "react";
import RootLayout from "../layout";
import Link from "next/link";

function page() {
  return (
    <RootLayout>
      <main>
        <h1>Dashboard</h1>
        <Link href="/">Back</Link>
      </main>
    </RootLayout>
  );
}

export default page;
