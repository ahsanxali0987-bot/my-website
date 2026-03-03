import { Link } from "react-router-dom";

export const contactFaqData = [
  {
    question: "How can I track my order?",
    answer: (
      <>
        You can track your order now by logging into your Priceoye Account.{" "}
        <Link to="/account" className="text-[#48afff] hover:underline">
          Account
        </Link>
      </>
    ),
  },
  {
    question: "How can I cancel my order?",
    answer: (
      <>
        <p>
          In case your order has not been dispatched, you can cancel your order
          by calling us directly on our helpline at 051-111-693-693.
        </p>
        <p>
          If your order has already been dispatched, you have the option to
          refuse delivery and your advance payment will be reimbursed.
        </p>
      </>
    ),
  },
  {
    question: "How can I register a complaint?",
    answer: (
      <>
        Please log in to{" "}
        <Link to="/account" className="text-[#48afff] hover:underline">
          My Account
        </Link>{" "}
        &gt;{" "}
        <Link
          to="/account/complaints"
          className="text-[#48afff] hover:underline"
        >
          Complaints
        </Link>{" "}
        &gt; Add Complaint.
      </>
    ),
  },
  {
    question: "How can I find the location of my brand's warranty centre?",
    answer: (
      <>
        Please click the information:{" "}
        <Link
          to="/warranty-center"
          className="text-[#48afff] hover:underline"
        >
          Warranty Center
        </Link>
      </>
    ),
  },
  {
    question: "What can I do if my desired product is out of stock?",
    answer:
      "Click the Request Mobile Option underneath the product. We will notify you within 7 days.",
  },
  {
    question:
      "How do I change the shipping address on a previously placed order?",
    answer:
      "Once placed, you cannot change the address. Cancel and reorder with correct details.",
  },
  {
    question: "What is Priceoye's Return Policy?",
    answer: (
      <>
        Find details by visiting{" "}
        <Link
          to="/return-policy"
          className="text-[#48afff] hover:underline"
        >
          Return Policy
        </Link>
      </>
    ),
  },
  {
    question: "Why is there no warranty card in the box?",
    answer:
      "Paper warranty cards are replaced with e-warranty activated once SIM is inserted.",
  },
  {
    question: "How many days will it take for my payment to be refunded?",
    answer: (
      <>
        It usually takes 3–15 days. Visit{" "}
        <Link
          to="/refund-policy"
          className="text-[#48afff] hover:underline"
        >
          Refund Policy
        </Link>
      </>
    ),
  },
  {
    question: "How can I get more details about the installment plan?",
    answer: (
      <>
        EMI is available for credit card holders. Click{" "}
        <Link to="/bnpl" className="text-[#48afff] hover:underline">
          BNPL
        </Link>
      </>
    ),
  },
  {
    question:
      "Can I change the colour and storage of my recently placed order?",
    answer:
      "It can only be changed if the order is not shipped and payment not made.",
  },
  {
    question: "What is Open Parcel Delivery?",
    answer:
      "You can check box condition and seal before accepting but cannot break the seal.",
  },
  {
    question: "Why are there no accessories in the box?",
    answer:
      "Some models no longer include headphones or adapters due to sustainability policies.",
  },
  {
    question: "How can I view my Order Packaging Video?",
    answer: (
      <>
        Visit your{" "}
        <Link to="/account/orders" className="text-[#48afff] hover:underline">
          Account Orders
        </Link>{" "}
        and click Order ID.
      </>
    ),
  },
  {
    question: "Where can I find the refund form?",
    answer: (
      <>
        Go to{" "}
        <Link to="/account/refund-orders" className="text-[#48afff] hover:underline">
          Refund Orders
        </Link>{" "}
        and click Request Refund.
      </>
    ),
  },
  {
    question: "How to deactivate your Priceoye App account?",
    answer: "Call 051-111-693-693 and customer service will guide you.",
  },
];