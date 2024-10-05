import { z } from "zod";

export const newCardFormSchema = z.object({
  card_holder: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  bank: z
    .string()
    .min(2, {
      message: "Bank name must be at least 2 characters.",
    })
    .max(30, {
      message: "Bank name must not be longer than 30 characters.",
    }),
  card_type: z
    .string()
    .min(2, {
      message: "Card type must be at least 2 characters.",
    })
    .max(30, {
      message: "Card type must not be longer than 30 characters.",
    }),
  card_number: z.string().length(12, {
    message: "Card number must exactly 12 characters.",
  }),
  cvv: z.string().length(3, {
    message: "CVV must be exactly 3 characters.",
  }),
  expiry_date: z.string().date("Date must be picked"),
});
