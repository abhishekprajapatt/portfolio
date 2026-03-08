"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Fill, RiCloseLargeFill } from "react-icons/ri";
import { ImArrowUpRight2 } from "react-icons/im";
import { NAV_ITEMS } from "@/constants";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.6 },
  exit: { opacity: 0 },
};

const menuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "calc(100vh - 4rem)",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const firstMenuItem = useRef(null);
  const lastMenuItem = useRef(null);
  const menuButton = useRef(null);

  useEffect(() => {
    const handleUserScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      firstMenuItem.current?.focus();
      window.addEventListener("scroll", handleUserScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleUserScroll);
    };
  }, [menuOpen]);

  const handleEscape = useCallback(
    (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    },
    [menuOpen],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  const handleClickOutside = useCallback(
    (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !menuButton.current?.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    },
    [menuOpen],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleMenuItemClick = useCallback((href) => {
    setMenuOpen(false);

    // Handle resume downloads differently
    if (href === "#resume") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setTimeout(() => {
      menuButton.current?.focus();
    }, 100);
  }, []);

  const handleKeyDown = useCallback(
    (e, href, isFirst, isLast) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleMenuItemClick(href);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (isLast) {
          firstMenuItem.current?.focus();
        } else {
          e.target.nextElementSibling?.focus();
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (isFirst) {
          lastMenuItem.current?.focus();
        } else {
          e.target.previousElementSibling?.focus();
        }
      }
    },
    [handleMenuItemClick],
  );

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black px-4 text-white md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
        <h1 className="font-head text-2xl font-extrabold tracking-wide">
          Abhishek
        </h1>
        <div className="flex items-center gap-4">
          <button
            ref={menuButton}
            onClick={handleMenuToggle}
            className="rounded-full p-1 transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <RiCloseLargeFill size={24} />
            ) : (
              <RiMenu3Fill size={24} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black px-4 backdrop-blur-sm md:px-8 lg:px-10"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu"
              ref={menuRef}
              className="fixed inset-x-0 top-16 z-50 overflow-hidden bg-black"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="mx-auto flex h-full max-w-7xl flex-col justify-start">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.a
                    key={idx}
                    variants={itemVariants}
                    ref={
                      idx === 0
                        ? firstMenuItem
                        : idx === NAV_ITEMS.length - 1
                          ? lastMenuItem
                          : null
                    }
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick(item.href);
                    }}
                    onKeyDown={(e) =>
                      handleKeyDown(
                        e,
                        item.href,
                        idx === 0,
                        idx === NAV_ITEMS.length - 1,
                      )
                    }
                    className="group flex items-center justify-between border-b border-gray-800 px-4 py-6 transition-all duration-200 first-of-type:border-t hover:bg-gray-900/50 focus:bg-gray-900/50 focus:outline-none"
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    <span className="font-head text-2xl font-bold text-gray-300 transition-colors group-hover:text-white group-focus:text-white md:text-4xl lg:text-6xl">
                      {item.label}
                    </span>
                    <ImArrowUpRight2 className="size-5 md:size-6 lg:size-7" />
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
