"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { newCardFormSchema } from "@/lib/validators/card";
import { z } from "zod";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import VisaLogoProvider from "../providers/visa";
import MastercardLogoProvider from "../providers/mastercard";

type CardFormValues = z.infer<typeof newCardFormSchema>;

export default function CardNewForm() {
  const form = useForm<CardFormValues>({
    resolver: zodResolver(newCardFormSchema),
    defaultValues: {},
    mode: "onChange",
  });

  function onSubmit(data: CardFormValues) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='max-w-3xl space-y-8 my-10'
      >
        <FormField
          control={form.control}
          name='card_type'
          render={({ field }) => (
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className='flex justify-around'
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='visa' id='visa' />
                <Label
                  htmlFor='visa'
                  className='text-lg flex gap-1 items-center cursor-pointer'
                >
                  Visa <VisaLogoProvider isFixed={false} size={6} />
                </Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='mastercard' id='mastercard' />
                <Label
                  htmlFor='mastercard'
                  className='text-lg flex gap-1 items-center cursor-pointer'
                >
                  Mastercard <MastercardLogoProvider isFixed={false} size={6} />
                </Label>
              </div>
            </RadioGroup>
          )}
        />
        <FormField
          control={form.control}
          name='card_holder'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder='Joe Blow' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='flex items-center'>
          <Plus className='h-5 w-5' />
          Add card to the wallet
        </Button>
      </form>
    </Form>
  );
}
