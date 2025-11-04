'use client'
import NewsList from "@/components/newslist";
import Header from "@/components/header";

export default function NewsPage() {
  return (
    <>
      <Header loggedIn={false}/>
      <br />
      <h1>Новости</h1>
      <NewsList />
    </>
  );
}
