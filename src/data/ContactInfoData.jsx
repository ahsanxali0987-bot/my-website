import { IoMail } from "react-icons/io5";

export const contactinfoData = [
  {
    title: "Contact Us",
    icon: <p className="bg-[#49afff] w-[34px] h-[34px] rounded-full"></p>,
    main: "051-111-693-693",
    sub: "9:00AM to 5:00PM [Mon-Sat]",
  },
  {
    title: "Email",
    icon: (
      <p className="bg-[#49afff] w-[34px] h-[34px] rounded-full flex items-center">
        <IoMail size={18} className="text-white m-auto" />
      </p>
    ),
    main: "hello@priceoye.pk",
    sub: "9:00AM to 5:00PM [Mon-Sat]",
  },
];
