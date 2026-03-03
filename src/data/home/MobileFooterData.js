import { AiFillMessage } from "react-icons/ai";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

export const MobileFooterData = [
  {
    icon: FaHome,
    title: "Home",
    path: "/",
  },
  {
    icon: IoIosNotifications,
    title: "Notifications",
    path: "/notifications",
  },
  {
    icon: AiFillMessage,
    title: "Categories",
    path: "/categories",
  },
  {
    icon: FaShoppingCart,
    title: "Cart",
    path: "/cart",
  },
  {
    icon: MdAccountCircle,
    title: "Account",
    path: "/login",
  },
];
