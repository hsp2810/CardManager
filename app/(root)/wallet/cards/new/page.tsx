import CardNewForm from "@/components/cards/card-new-form";
import React from "react";

export default function NewCardPage() {
  return (
    <section>
      <h1 className='font-semibold text-4xl'>Add a new card to the wallet</h1>
      <CardNewForm />
    </section>
  );
}
