import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link"
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>
      <div>Welcome to Next js.
        <br/>
          1.static generation:
          - by default for every page.
          - static generation happens once at built time.
          - in the development time static generation happens for every request.

          - with data
          - without data
          - getStatic props

          2.server side rendering:
          - getServerSideProps
        <br/>
         <Link href="/user">home</Link>
        <div><Link href="user">user</Link></div>
      </div>
    </>
  );
}
