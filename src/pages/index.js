import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
;
import Home from "../component/Home";
const inter = Inter({ subsets: ["latin"] });

export default function myApp() {
  return (
    <>
      <Head>
        <title>Ment Tech - Regulated Blockchain & AI Products & Services Provider</title>
        <meta name="description" content="Ment Tech -  Regulated Blockchain & AI Products & Services Provider" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
        <Home />
      </div>
    </>
  );
}
