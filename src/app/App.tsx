import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { LandingPage } from "./components/LandingPage";
import { TicketPage } from "./components/TicketPage";
import { PaymentPage } from "./components/PaymentPage";
import type { CartItem, PaymentMode } from "./components/TicketPage";

type Page = "loading" | "landing" | "ticket" | "payment";

export default function App() {
  const [page, setPage] = useState<Page>("loading");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [payMode, setPayMode] = useState<PaymentMode>("now");

  const handleLoadingDone = () => setPage("landing");
  const handleBuyTicket = () => {
    setPage("ticket");
    window.scrollTo(0, 0);
  };
  const handleProceed = (c: CartItem[], mode: PaymentMode) => {
    setCart(c);
    setPayMode(mode);
    setPage("payment");
    window.scrollTo(0, 0);
  };
  const handleBackFromPayment = () => {
    setPage("ticket");
    window.scrollTo(0, 0);
  };
  const handleBackFromTicket = () => {
    setPage("landing");
    window.scrollTo(0, 0);
  };
  const handleSuccess = () => {
    setPage("landing");
    window.scrollTo(0, 0);
  };

  return (
    <div className="size-full">
      {page === "loading" && <LoadingScreen onComplete={handleLoadingDone} />}
      {page === "landing" && <LandingPage onBuyTicket={handleBuyTicket} />}
      {page === "ticket" && <TicketPage onBack={handleBackFromTicket} onProceed={handleProceed} />}
      {page === "payment" && (
        <PaymentPage
          cart={cart}
          mode={payMode}
          onBack={handleBackFromPayment}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
}
