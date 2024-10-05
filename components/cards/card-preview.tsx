import Link from "next/link";
import MastercardLogoProvider from "../providers/mastercard";
import VisaLogoProvider from "../providers/visa";

interface CardPreviewProps {
  card_type: "mastercard" | "visa";
  bank?: string;
  card_holder?: string;
  card_number?: string;
  cvv?: string;
  expiry_date?: Date;
}

export default function CreditPreview(props: CardPreviewProps) {
  const { card_type } = props;
  return (
    <Link
      href={"/wallet/cards/123"}
      className={`relative bg-gradient-to-br ${
        card_type === "mastercard"
          ? "from-black to-gray-800"
          : "from-violet-950 to-violet-900"
      } rounded-lg shadow-lg p-4 hover:shadow-[0_0_15px_rgba(255,255,255,.1)] transition-shadow duration-300`}
    >
      {/* Bank Name */}
      <div className='text-white text-xl font-semibold'>Your Bank</div>

      {/* Credit Card Title */}
      <div className='text-gray-400 text-sm mt-1'>Credit Card</div>

      {/* Mastercard Logo */}
      {card_type === "mastercard" ? (
        <MastercardLogoProvider isFixed size={6} />
      ) : (
        <VisaLogoProvider isFixed size={6} />
      )}

      {/* Card Number */}
      <div className='text-white text-2xl mt-4 text-center tracking-wider'>
        1234 5678 9012 3456
      </div>

      {/* Expiry and CVV */}
      <div className='flex justify-between mt-4 text-gray-400'>
        <div>
          <div className='text-xs'>Expiry</div>
          <div className='text-sm'>12/24</div>
        </div>
        <div>
          <div className='text-xs'>CVV</div>
          <div className='text-sm'>123</div>
        </div>
      </div>

      {/* Cardholder Name */}
      <div className='mt-2 text-white text-lg'>John Doe</div>
    </Link>
  );
}
