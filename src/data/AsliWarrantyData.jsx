export const AsliWarrantyData = {
  accordion: [
    {
      question:
        "The brand issued a notice saying Priceoye isn’t an official partner, so your warranty is void.",
      answer: [
        "Being a “Partner” is just a marketing title that brands give to shops that agree to sell at high prices. Priceoye chooses not to be a “Partner” so we can give you up to Rs. 10,000 discount.",
        "Example: If you buy a brand-new Toyota from a private showroom instead of a 3S Dealership, does the engine warranty disappear? No. The warranty is on the Car (Engine Number), not the showroom.",
        "Similarly, in mobiles, the warranty is on the Phone (IMEI). If the IMEI is official, the Brand must fix it. These “notices” protect shopkeepers’ high profits, not your rights.",
      ],
    },
    {
      question: "Priceoye phones are repacked or already activated.",
      answer: [
        {
          ans: "We only sell 100% Factory Sealed phones. To give you confidence, we offer proof you won’t find anywhere else:",
          p: [
            "Open Parcel Delivery: You don't have to take our word for it. Open the flyer (Karachi, Lahore, and Islamabad) and inspect the brand seal yourself.",
            "Product Packing Video: For every order across Pakistan, we record a video of your product being packed. We show you the product being shipped.",
          ],
        },
        {
          ans: "If we had anything to hide, we wouldn’t show you the box up close.",
        },
      ],
    },
    {
      question: "They aren’t official partners, so the phones must be fake.",
      answer:
        "Priceoye is the “Official Online Retailer” for many brands including Samsung, Nothing, ZTE, etc. We refuse “Partner” status of brands that force us to sell at high, fixed prices. Instead, we source authorized dealers and distributors (Airlink, M&P, etc.) and pass the savings directly to you.",
    },
    {
      question:
        "Brand service centers will reject Priceoye phones or receipts.",
      answer:
        "Warranty is tied to the IMEI, not the shop. If the IMEI is in the brand's official database, they are legally bound to honor it. Our 2X Warranty Challenge covers this: if an official center rejects you specifically because you bought from Priceoye, we pay you double.",
    },
    {
      question: "The price is low because it is a ‘clone’ or ‘master copy’.",
      answer:
        "Clones cannot be registered on official brand portals or with the PTA. We encourage you to verify your IMEI only on official brand websites. If an official service center confirms the device is a clone, we pay you 2x your money back. ",
    },
    {
      question: "Online phones are ‘B-grade’ or ‘lot’ items.",
      answer:
        "Mobile brands (Infinix, Oppo, Realme, Samsung, Tecno, Xiaomi, Vivo, etc.) do not have “grades.” There is only one official production line. The phone you see in a retail shop is the exact same unit we ship from our warehouse.",
    },
    {
      question: "The phone won’t be PTA approved.",
      answer:
        "Every single phone sold on Priceoye is 100% PTA Approved. You can verify the status yourself by sending the IMEI to 8484 the second you receive your parcel.",
    },
    {
      question: "You need a physical shop stamp for a warranty claim.",
      answer:
        "In 2026, warranty is digital. A valid, official IMEI is all you need. No shop stamp in the world is more powerful than a brand’s official database.",
    },
    {
      question: "Online shops disappear if the phone is faulty.",
      answer:
        "While a small shop in a market can close tomorrow, Priceoye serves millions of users every month. We are Pakistan’s largest platform for smartphones with a documented 3-day replacement policy and a 200% authenticity guarantee.",
    },
    {
      question: "The shopkeeper is your only friend for support.",
      answer:
        "Shopkeepers often charge a “Fear Tax” of up to Rs. 10,000 to cover their high costs. When something goes wrong, they often blame the user. Priceoye provides professional customer support and a written Asli Warranty Challenge that a local shop can never match.",
    },
  ],

  challenge: [
    {
      src: "https://static.priceoye.pk/icons/check-for-badge.svg",
      title: "Check for badge",
      desc: "This challenge applies to all mobile phones carrying the “Warranty Challenge” tag.",
    },
    {
      src: "https://static.priceoye.pk/icons/verify-imei.svg",
      title: "Verify your IMEI",
      desc: "Verify your warranty via the brand’s official website or service center.",
    },
    {
      src: "https://static.priceoye.pk/icons/2x-challange.svg",
      title: "Total Peace of Mind",
      desc: "If rejected, we activate the 2x refund.",
    },
  ],

  rules: [
    {
      rules: "Place of Purchase Proof:",
      desc: (
        <>
          To claim the 2X refund, you must provide a{" "}
          <span className="font-semibold">written rejection slip</span> from an
          official Brand Service Center specifically stating that the warranty
          is void because the device was purchased from Priceoye. Priceoye
          reserves the right to independently verify the claim.
        </>
      ),
    },
    {
      rules: "Official Rejections Only:",
      desc: (
        <>
          This challenge covers the{" "}
          <span className="font-semibold">authenticity of the warranty</span>.
          It does not apply if a brand rejects a claim for reasons mentioned in
          their warranty guidelines, Such as:
        </>
      ),
      reasons: [
        "Physical or liquid damage.",
        "Software rooting or unauthorized repairs.",
        "Expired warranty period.",
      ],
    },
    {
      rules: "30-Day Verification Window:",
      desc: (
        <>
          Customers must verify their warranty status and report any “rejection”
          claims within{" "}
          <span className="font-semibold">30 days of delivery</span>. After 30
          days, the 2X refund offer expires.
        </>
      ),
    },
    {
      rules: "Return Policy:",
      desc: (
        <>
          To process the 2X refund, the customer must return the device to
          Priceoye in its{" "}
          <span className="font-semibold">original condition</span>, including
          the box and accessories.
        </>
      ),
    },
    {
      rules: "Territory:",
      desc: (
        <>
          This challenge is only applicable to official brand warranties
          claimable within Pakistan.
        </>
      ),
    },
    {
      rules: "Scope:",
      desc: (
        <>
          Only products explicitly mentioning the{" "}
          <span className="font-semibold">“Warranty Challenge”</span> on the
          product detail page are eligible.
        </>
      ),
    },
  ],
};
