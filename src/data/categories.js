import { GiHoodie } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { GiArmoredPants } from "react-icons/gi";
import { FaHatCowboy } from "react-icons/fa";
import { GiWatch } from "react-icons/gi";

const categories = [
  {
    id: "hoodies",
    name: "Hoodies & Jackets",
    description: "Stay warm and stylish with our latest hoodies and jackets.",
    img: "https://images.unsplash.com/photo-1617137968427-85924a5a7c6e?auto=format&fit=crop&w=600&q=80",
    icon: GiHoodie, // store component reference
  },
  {
    id: "tshirts",
    name: "T-Shirts & Tops",
    description: "Casual and trendy t-shirts for everyday wear.",
    img: "https://images.unsplash.com/photo-1602810318383-e12f5d6b0f6a?auto=format&fit=crop&w=600&q=80",
    icon: FaTshirt,
  },
  {
    id: "bottoms",
    name: "Bottoms",
    description: "Jeans, joggers, and more to complete your look.",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    icon: GiArmoredPants,
  },
  {
    id: "caps",
    name: "Caps & Headwear",
    description: "Stylish caps and hats to top off your fit.",
    img: "https://images.unsplash.com/photo-1589395595558-343f3f96a5ba?auto=format&fit=crop&w=600&q=80",
    icon: FaHatCowboy,
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Belts, watches, and extras to level up your style.",
    img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=600&q=80",
    icon: GiWatch,
  },
];

export default categories;
