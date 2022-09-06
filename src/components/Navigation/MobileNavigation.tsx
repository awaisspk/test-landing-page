import cx from 'classnames';
import type { Variants } from 'framer-motion';
import { motion, MotionConfig, useAnimationControls } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { TbMenu2, TbX } from 'react-icons/tb';

import { navigation } from '@/utils/AppConfig';

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimationControls();
  const menuItemsVariant: Variants = {
    initial: {
      translateY: '100%',
      opacity: 0,
    },
    animate: (i) => ({
      translateY: '0%',
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.2 * i,
      },
    }),
  };

  const btnVariant: Variants = {
    moveUp: {
      translateY: '-200%',
    },
    center: {
      translateY: '-50%',
    },
    moveDown: {
      translateY: '200%',
    },
  };

  useEffect(() => {
    if (isOpen) {
      controls.start('animate');
    }
  }, [isOpen]);

  return (
    <>
      <MotionConfig transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}>
        <button
          className="relative z-[100] h-10 w-10  overflow-hidden rounded-full bg-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              translateX: '-50%',
            }}
            variants={btnVariant}
            initial={false}
            animate={isOpen ? 'center' : 'moveUp'}
          >
            <TbX className="h-7 w-7" />
          </motion.div>

          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              translateX: '-50%',
            }}
            variants={btnVariant}
            initial={false}
            animate={isOpen ? 'moveDown' : 'center'}
          >
            <TbMenu2 className="h-7 w-7" />
          </motion.div>
        </button>
        <motion.div
          className={cx(
            'flex flex-col px-8 bg-white fixed z-[99] top-0 left-0 w-full h-[100vh]'
          )}
          initial={{ translateY: '-100%' }}
          animate={{
            translateY: isOpen ? '0%' : '-100%',
          }}
        >
          <motion.nav className="flex grow items-center justify-center sm:justify-start">
            <ul className="flex flex-col items-center space-y-7 sm:items-start">
              {navigation.map((link, i) => (
                <motion.li
                  key={i}
                  className="cursor-pointer overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={link.href}>
                    <motion.a
                      className="relative block text-center text-3xl"
                      variants={menuItemsVariant}
                      initial="initial"
                      animate={isOpen ? 'animate' : 'initial'}
                      custom={i + 1}
                    >
                      {link.label}
                    </motion.a>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      </MotionConfig>
    </>
  );
};
