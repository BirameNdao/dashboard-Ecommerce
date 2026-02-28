import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';

import Cart from './Cart';
import Chat from './Chat';
import Notification from './Notification';
import UserProfile from './UserProfile';
import { useStateContext } from '../contexts/ContextProvider';

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked } = useStateContext();

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <button
        type="button"
        onClick={() => setActiveMenu(!activeMenu)}
        style={{ color: currentColor }}
        className="relative text-xl border-1 border-color p-3 rounded-full text-black dark:text-white dark:border-[#393E46]"
        title="Menu"
      >
        <AiOutlineMenu />
      </button>

      <div className="flex">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('chat')}
        >
          <BsChatLeft className="rounded-full text-2xl text-black dark:text-white" />
          <p className="text-gray-600 dark:text-gray-400">Messages</p>
        </div>
        {isClicked.chat && <Chat />}

        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('notification')}
        >
          <RiNotification3Line className="rounded-full text-2xl text-black dark:text-white" />
        </div>
        {isClicked.notification && <Notification />}

        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('cart')}
        >
          <FiShoppingCart className="rounded-full text-2xl text-black dark:text-white" />
        </div>
        {isClicked.cart && <Cart />}

        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('userProfile')}
        >
          <img
            className="rounded-full w-8 h-8"
            src="https://i.pinimg.com/236x/65/ba/41/65ba41c4e8ecf955ff2142107c0a3c2d.jpg"
            alt="user avatar"
          />
        </div>
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
