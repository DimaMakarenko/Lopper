import { TimelineMax } from 'gsap';

const animateNavBar = (logo, menu, phone, menuItems) => {
  const tl = new TimelineMax();
  tl.staggerFromTo(logo.current, 1, { opacity: 0 }, { opacity: 1 }, '-=0.3')
    .staggerFromTo(phone.current, 0.7, { opacity: 0 }, { opacity: 1 }, 0.4)
    .staggerFromTo(menuItems.current, 0.5, { y: -370, opacity: 0 }, { y: 0, opacity: 1 }, 0.1);
};

export default animateNavBar;
