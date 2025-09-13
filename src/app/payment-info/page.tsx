// src/app/payment-info/page.tsx
import { Suspense } from "react";
import PaymentInfoContent from "@/app/payment-info/payment-info-content";

export default function PaymentInfoPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <PaymentInfoContent />
    </Suspense>
  );
}
