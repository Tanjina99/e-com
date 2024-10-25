import { Inter } from "next/font/google";
import Header from "@/components/shared/Header/Header";
import HeadComp from "@/components/shared/HeadComp";
import Register from "@/components/auth/Register";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeadComp/>
      <Header/>
      <main className="main_container">
        <Register/>
      </main>
    </>
  );
}