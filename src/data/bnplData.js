export const banks = [
  "Askari Bank",
  "Bank Alfalah",
  "Faysal Bank",
  "HBL",
  "JS Bank",
  "MCB",
  "SCB",
  "SilkBank",
  "UBL",
];

export const steps = [
  "To buy from Priceoye on (EMI) installment, first choose your product and add it to your cart.",
  "The cart should only contain one product worth at least PKR 10,000.",
  "Click Check Out, proceed to Payment, and choose Installment as your payment method.",
  "Choose your bank, the length of your EMI, and enter your credit card information.",
  "A code will be sent to your registered phone number and email address.",
  "Your EMI plan may take up to 7 working days to activate.",
];

export const bnplQuestions = [
  {
    q: "I was trying to process my order on BNPL but my session expired. What should I do now?",
    ans: "You can proceed with pending payment by logging into your profile and clicking Pay Now.",
  },
  {
    q: "Can I opt for an installment plan with my debit card?",
    ans: "You can only choose an installment plan if you have a credit card.",
  },
  {
    q: "Do you offer installments for HBL Bank?",
    subans: banks,
  },
];
