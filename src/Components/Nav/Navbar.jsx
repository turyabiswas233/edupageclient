import { links } from '../../assets/LinkInfo';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsCaretRight } from 'react-icons/bs';
import PrimaryButton from '../Buttons/PrimaryButton';
import { NavLink, useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobOpen, setIsMobOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const setNavState = (e) => {
    if (window.scrollY > 200) {
      setIsTop(false);
    }
    if (window.scrollY <= 200) {
      setIsTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setNavState);

    return () => {
      window.removeEventListener('scroll', setNavState);
    };
  }, []);

  return (
    <div
      className={`w-full z-40 h-auto py-3 pb-4 px-3 md:px-[4] transition-all duration-500 bg-primary-main ${
        isTop ? '' : 'fixed top-0 left-0 shadow-md'
      }`}
    >
      <div
        id='navbar'
        className='flex flex-row gap-4 m-auto max-w-6xl w-[100%] items-center justify-between'
      >
        {/* logo */}
        <div>
          <h1 className='text-2xl font-bold text-black w-fit pr-3'>
            Chemgenie
          </h1>
        </div>
        {/* main nav */}
        <div className='flex flex-row justify-end md:justify-between w-full'>
          {/* menus */}
          <div className='hidden md:flex flex-row gap-6 px-4 items-center'>
            {links.map((item, value) => {
              return (
                <NavLink
                  key={value}
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'text-md transition-transform text-orange-400'
                      : isActive
                      ? 'text-md transition-transform text-secondary-dark'
                      : 'text-md transition-transform text-black'
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          {/* buttons */}
          <div className='hidden md:flex flex-row gap-3'>
            <PrimaryButton
              text={'All Courses'}
              classes={'border border-solid border-onPrimary-main '}
              textClasses={'text-onPrimary-main'}
              onClick={() => {
                navigate('/courses');
              }}
            />
            <PrimaryButton
              icon={<BsCaretRight fontSize={'.9rem'} />}
              text={'Login'}
              classes={'bg-secondary-main'}
              onClick={() => {
                navigate('/login');
              }}
            />
          </div>

          {/* buttons */}
          <div className='flex md:hidden flex-row gap-3'>
            {/* <PrimaryButton
              text={'All Courses'}
              classes={'bg-onPrimary-light'}
            /> */}
            <PrimaryButton
              icon={<RxHamburgerMenu fontSize={'1.2rem'} />}
              classes={'bg-secondary-main p-2'}
              onClick={() => {
                setIsMobOpen(true);
              }}
            />
          </div>
        </div>
      </div>

      <MobileNav setIsMobOpen={setIsMobOpen} isMobOpen={isMobOpen} />
    </div>
  );
};

export default Navbar;
