import CreditPreview from "@/components/cards/card-preview";
import TransactionTable from "@/components/transactions/transaction-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function CardPage() {
  return (
    <ScrollArea className='flex flex-col h-full'>
      <h1 className='font-semibold text-4xl'>Credit - MasterCard</h1>
      <section className='mt-6 grid gap-5 grid-cols-3'>
        <CreditPreview card_type='mastercard' />
      </section>
      <section className='my-7 flex flex-col gap-5'>
        <h1 className='text-3xl font-semibold'>Transactions</h1>
        <section className='space-y-3'>
          <h2>Pending Transactions</h2>
          <TransactionTable />
        </section>
        <section className='space-y-3'>
          <h2>Added Transactions</h2>
          <TransactionTable />
        </section>
      </section>
    </ScrollArea>
  );
}
