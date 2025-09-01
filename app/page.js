import { Heading } from "@/components/Headinng";
import MainCard from "@/components/MainCard";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen bg-background">
      <Heading />
      <MainCard />
    </main>
  );
}
