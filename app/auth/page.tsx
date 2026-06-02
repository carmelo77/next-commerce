import Image from "next/image";

import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className={`${titleFont.className} font-bold`}>Login page</h1>
      </main>
    </div>
  );
}
