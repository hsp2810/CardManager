import Link from "next/link";
import React from "react";
import LogoProvider from "./logo-provider";
import { Button } from "../ui/button";
import {
  ArrowLeftRight,
  DollarSign,
  LogOut,
  User,
  WalletCards,
} from "lucide-react";

export default function Sidebar() {
  return (
    <main className='bg-primary-foreground flex flex-col justify-between h-full p-6 rounded-md'>
      <LogoProvider />
      <ul className='flex flex-col gap-5 w-full'>
        <Link
          href={"/wallet"}
          className='flex items-center gap-2 pl-5 hover:bg-white hover:text-black transition rounded-md py-2 '
        >
          <WalletCards className='h-5 w-5' />
          Wallet
        </Link>
        {/* <Link
          href={"/wallet/balance"}
          className='flex items-center gap-2 pl-5 hover:bg-white hover:text-black transition rounded-md py-2 '
        >
          <DollarSign className='h-5 w-5' />
          Balance
        </Link> */}
        {/* <Link
          href={"/wallet/transactions"}
          className='flex items-center gap-2 pl-5 hover:bg-white hover:text-black transition rounded-md py-2 '
        >
          <ArrowLeftRight className='h-5 w-5' />
          Transactions
        </Link> */}
      </ul>
      <div className='flex flex-col gap-2'>
        <Button variant={"destructive"} className='flex items-center gap-2'>
          <LogOut className='h-5 w-5' />
          Logout
        </Button>
        <Button className='flex items-center gap-2'>
          <User className='h-5 w-5' />
          Profile
        </Button>
      </div>
    </main>
  );
}
