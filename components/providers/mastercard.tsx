import { CardTypeLogoProps } from "@/types";
import React from "react";

export default function MastercardLogoProvider({
  isFixed,
  size,
}: CardTypeLogoProps) {
  return (
    <div
      className={`${
        isFixed && "absolute top-4 right-4"
      } flex items-center space-x-1`}
    >
      <div className={`w-${size} h-${size} bg-yellow-500 rounded-full`}></div>
      <div className={`w-${size} h-${size} bg-red-600 rounded-full`}></div>
    </div>
  );
}
