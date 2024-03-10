import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import  "../Components/sidebar.css"

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
  const [isopen, setisopen] = useState(false);
  const toggle = () => setisopen(!isopen);
  const inputanimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity:0
    },
    show:{
        width:"140px",
        appding:"5px 15px",
        opacity:1,
        transition :{
            duration:0.2
        }

    }
  };
  return (
    <div className="main-container">
      <motion.div
        animate={{ width: isopen ? "200px" : "35px" }}
        className="sidebar"
      >
        <div className="top_section">
          {isopen && <h1 className="logo">Do Some Coding</h1>}
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="search">
          <div className="search_icon">
            <BiSearch />
          </div>
          <AnimatePresence>
            {isopen && <motion.input initial="hidden" animate="show" exit="hidden" variants = {inputanimation}placeholder="search..." />}
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
