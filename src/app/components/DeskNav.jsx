import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/RG-logo2.png";

const Navbar = () => {
  // State variables to manage mobile menu and profile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home"); // Set "Home" as the default active tab

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to toggle the profile menu visibility
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  // Function to close the profile menu
  const closeProfileMenu = () => {
    setProfileMenuOpen(false);
  };

  // Function to set the active tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="min-h-full">
      <nav className="w-full border bg-gray-50 shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-fit w-16" src={Logo} alt="Company Logo" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to={'/home/profile'}
                    className={`${
                      activeTab === "Home"
                        ? "bg-purple-400 text-white duration-300"
                        : "text-black hover:bg-purple-400 duration-300 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    onClick={() => handleTabClick("Home")}
                  >
                    Home
                  </Link>
                  <Link
                    to={'/home/profile'}
                    className={`${
                      activeTab === "Message"
                        ? "bg-purple-400 text-white duration-300"
                        : "text-black hover:bg-purple-400 duration-300 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    onClick={() => handleTabClick("Message")}
                  >
                    Message
                  </Link>
                  <Link
                    to={'/home/profile'}
                    className={`${
                      activeTab === "Market"
                        ? "bg-purple-400 text-white duration-300"
                        : "text-black hover:bg-purple-400 duration-300 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    onClick={() => handleTabClick("Market")}
                  >
                    Market
                  </Link>
                  <Link
                    to={'/home/profile'}
                    className={`${
                      activeTab === "Games"
                        ? "bg-purple-400 text-white duration-300"
                        : "text-black hover:bg-purple-400 duration-300 hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    onClick={() => handleTabClick("Games")}
                  >
                    Games
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="relative ml-3">
                  <button
                    type="button"
                    className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={toggleProfileMenu}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-12 w-12 rounded-full profile-image"
                      src="https://img.freepik.com/premium-photo/portrait-cute-little-boy-preschool-with-copyspace-created-with-generative-ai_762026-36552.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=ais"
                      alt=""
                    />
                  </button>
                  {isProfileMenuOpen && (
                    <div
                      className="profile-menu absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex="-1"
                      onBlur={closeProfileMenu}
                    >
                      <Link
                        to={'/home/profile'}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabIndex="-1"
                      >
                        Your Profile
                      </Link>
                      <Link
                        to={'/home/profile'}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        tabIndex="-1"
                      >
                        Sign out
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-purple-400 duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={isMobileMenuOpen ? "hidden" : "block h-6 w-6"}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={
                    isMobileMenuOpen ? "block h-6 w-6" : "hidden h-6 w-6"
                  }
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={isMobileMenuOpen ? "block" : "hidden"} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3"></div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5"></div>
            <div className="mt-3 space-y-1 px-2"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
