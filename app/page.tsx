import Image from "next/image";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Mantapp</h1>
      </main>
    </RootLayout>
  );
}
