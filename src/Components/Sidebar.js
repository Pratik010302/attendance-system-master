import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../Components/sidebar.css"

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
];
const Sidebar = ({ children }) => {
  const [isopen, setisopen] = useState(true);
  
  return (
    <div className="main-container">
      <motion.div
        animate={{ width: "200px" }}
        className="sidebar"
      >
        <div className="top_section">
          {<h1 className="logo">Attendence</h1>}
          <div className="bars">
            <FaBars/>
          </div>
        </div>
        <div className="search">
          <div className="search_icon">
            <BiSearch />
          </div>
          <AnimatePresence>
            {<motion.input initial="show" animate="show" exit="hidden" placeholder="search..." />}
          </AnimatePresence>
        </div>
        <section className="routes">
          {routes.map((routes) => (
            <NavLink to={routes.path} key={routes.name} className="link">
              <div className="icon">{routes.icon}</div>
              <div className="link_text">{routes.name}</div>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
