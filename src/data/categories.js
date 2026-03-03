import {
  RiBattery2ChargeLine,
  RiFridgeLine,
  RiRouterLine,
  RiWirelessChargingFill,
} from "react-icons/ri";
import { CiSpeaker } from "react-icons/ci";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { FiSmartphone } from "react-icons/fi";
import { BsSmartwatch, BsEarbuds, BsPower } from "react-icons/bs";
import { MdOutlinePerson2, MdTabletAndroid } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { FaLaptop, FaMotorcycle, FaTv } from "react-icons/fa";
import { BiFridge } from "react-icons/bi";
import { GiCartwheel } from "react-icons/gi";
import { PiMotorcycleBold } from "react-icons/pi";
import { LuCable } from "react-icons/lu";
import { TiBatteryCharge } from "react-icons/ti";

export const categories = [
  {
    key: "mobile",
    label: "Mobiles",
    icon: FiSmartphone,
    items: [
      "Samsung",
      "Infinix",
      "Oppo",
      "Xiaomi",
      "Vivo",
      "Nothing",
      "Techno",
      "Realme",
      "More Brands",
    ],
  },
  {
    key: "smartwatch",
    label: "Smart Watches",
    icon: BsSmartwatch,
    items: [
      "Faster",
      "Nothing",
      "Zero",
      "Assorted",
      "Dany",
      "Samsung",
      "Huawei",
      "More Brands",
    ],
  },
  {
    key: "earbuds",
    label: "Wireless Earbuds",
    icon: BsEarbuds,
    items: [
      "Xiaomi",
      "Audionic",
      "Sounpeats",
      "Airox",
      "Zero",
      "Assorted",
      "Lenovo",
      "Ronin",
      "More Brands",
    ],
  },
  {
    key: "air",
    label: "Air Purifiers",
    icon: RiRouterLine,
    items: ["Xiaomi", "Beurer", "More Brands"],
  },
  {
    key: "personalcare",
    label: "Personal Care",
    icon: MdOutlinePerson2,
    items: [],
  },
  {
    key: "accessories",
    label: "Mobile Accessories",
    icon: AiOutlineMobile,
    subButtons: [
      { label: "Charging Cables", icon: LuCable },
      { label: "Wireless Chargers", icon: RiWirelessChargingFill },
      { label: "Wall Chargers", icon: RiBattery2ChargeLine },
      { label: "Car Chargers", icon: TiBatteryCharge },
    ],
  },
  {
    key: "speaker",
    label: "Bluetooth Speakers",
    icon: CiSpeaker,
    items: [
      "Xiaomi",
      "Sound Crush",
      "Audionic",
      "Faster",
      "JBL",
      "Tronsmart",
      "Assorted",
      "Anker",
      "More Brands",
    ],
  },
  {
    key: "power",
    label: "Power Banks",
    icon: BsPower,
    items: ["Xiaomi", "Baseus", "Faster", "Joyroom", "More Brands"],
  },
  {
    key: "tablet",
    label: "Tablets",
    icon: MdTabletAndroid,
    items: [
      "Apple",
      "Samsung",
      "Xiaomi",
      "G-Tide",
      "Infinix",
      "Huawei",
      "Itel",
      "Techno",
      "More Brands",
    ],
  },
  {
    key: "laptop",
    label: "Laptops",
    icon: FaLaptop,
    items: ["Lenovo", "Dell", "HP", "Apple", "Asus", "Acer", "More Brands"],
  },
  {
    key: "appliance",
    label: "TV & Home Appliances",
    icon: BiFridge,
    subButtons: [
      { label: "Led-TV", icon: FaTv },
      { label: "AC", icon: TbAirConditioningDisabled },
      { label: "Fridge", icon: RiFridgeLine },
    ],
  },
  {
    key: "auto",
    label: "Auto",
    icon: GiCartwheel,
    subButtons: [
      { label: "Electric Bike", icon: PiMotorcycleBold },
      { label: "Motorcycle", icon: FaMotorcycle },
    ],
  },
];
