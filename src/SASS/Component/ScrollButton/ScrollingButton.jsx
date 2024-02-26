import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import './Style.scss'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if (window.scrollY > 300) {
        setVisible(true)
      } else { setVisible(false) }
    })
  }, [])

  return (
    <a style={{ opacity: visible ? 1 : 0, transition: "1s" }} className='btnToTop' href='#About' >
    <IoIosArrowUp className='btn' />
  </a>
  );
};

export default ScrollButton;
