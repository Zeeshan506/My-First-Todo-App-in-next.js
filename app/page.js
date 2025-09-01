import { Heading } from "@/components/Headinng";
import MainCard from "@/components/MainCard";
import Joke from "@/components/Quote ";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 py-8 bg-background">
      <Heading />
      <Joke />
      <MainCard />
    </main>
  );
}
