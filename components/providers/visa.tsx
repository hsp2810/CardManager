import { CardTypeLogoProps } from "@/types";
import React from "react";

export default function VisaLogoProvider({ isFixed, size }: CardTypeLogoProps) {
  return (
    <div className={`${isFixed && "absolute top-4 right-4"} flex items-center`}>
      <div
        className={`text-white ${
          size === 4 ? "text-xl" : size === 6 ? "text-2xl" : "text-lg"
        } font-bold`}
      >
        VISA
      </div>
    </div>
  );
}
