import Navbar from "@/components/providers/navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Euro, Mail, WalletCards } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='flex flex-col gap-10 h-[88vh] items-center justify-center text-center px-20'>
        <h1 className='text-8xl font-bold'>
          Your goto wall
          <Euro className='inline h-16 w-16' />t to save money.
        </h1>
        <div className='flex gap-5'>
          <Link
            href={"/wallet"}
            className={cn(buttonVariants(), "flex items-center gap-2")}
          >
            <WalletCards className='h-6 w-6 -mr-1' />
            Go to wallet
          </Link>
          <Button variant={"ghost"} className='flex items-center gap-2'>
            <Mail className='h-6 w-6' />
            Request a demo
          </Button>
        </div>
      </div>
    </main>
  );
}
