import { HandCoins } from "lucide-react";
import React from "react";

export default function LogoProvider() {
  return (
    <h1 className='flex items-center gap-1'>
      <HandCoins className='h-10 w-10 text-violet-500' />{" "}
      <span className='text-2xl font-bold text-violet-700'>MONEYWISE</span>
    </h1>
  );
}
