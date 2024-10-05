import CreditPreview from "@/components/cards/card-preview";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function WalletPage() {
  return (
    <section>
      <div className='flex items-center gap-2'>
        <h1 className='font-semibold text-3xl'>Your wallet</h1>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <Link href={"/wallet/cards/new"}>
                <PlusCircle />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add a new card to the wallet</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <section className='mt-10 grid gap-5 grid-cols-3'>
        <CreditPreview card_type='mastercard' />
        <CreditPreview card_type='visa' />
      </section>
    </section>
  );
}
