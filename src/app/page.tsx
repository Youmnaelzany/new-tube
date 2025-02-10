import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      <p className="">NewTube</p>
    </main>
  );
}
