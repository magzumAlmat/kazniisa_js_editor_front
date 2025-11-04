'use client';
import React from "react";
import { useRouter } from "next/navigation";

export default function Layout1() {
  const router = useRouter();
    const goToMajor = async () => {
      // await dispatch(loginAction(email, password));
      // window.location.reload();
      router.push("/major");
    };
  

  return (
    <div className="layout__box">
     <button onClick={goToMajor}>click</button>
       <button onClick={() => router.push("/news")}>Просмотр новостей</button>
    </div>
  );
}
