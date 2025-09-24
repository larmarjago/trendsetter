import { GiHoodie } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { GiArmoredPants } from "react-icons/gi";
import { FaHatCowboy } from "react-icons/fa";
import { GiWatch } from "react-icons/gi";
import cap1 from "../assets/cap.jpg";
import Tshirt from "../assets/tshirt.jpg";
import hoodie from "../assets/hoodie.jpg";
import pant from "../assets/pants.jpg";

const categories = [
  {
    id: "hoodies",
    name: "Hoodies & Jackets",
    description: "Stay warm and stylish with our latest hoodies and jackets.",
    img: hoodie,
    icon: GiHoodie, // store component reference
  },
  {
    id: "tshirts",
    name: "T-Shirts & Tops",
    description: "Casual and trendy t-shirts for everyday wear.",
    img: Tshirt,
    icon: FaTshirt,
  },
  {
    id: "bottoms",
    name: "Pants",
    description: "Jeans, joggers, and more to complete your look.",
    img: pant,
    icon: GiArmoredPants,
  },
  {
    id: "caps",
    name: "Caps",
    description: "Stylish caps and hats to top off your fit.",
    img: 
      cap1,
    icon: FaHatCowboy,
  },

];

export default categories;
