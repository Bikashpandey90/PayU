'use client';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import styles from './style.module.scss';
import NavMenu from '../Nav/nav';
import Button from '../Button/button';

import { TEST_CREDENTIALS } from "../Nav/data";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

const menu = {
    open: {
        width: "min(80vw, 380px)",
        height: "350px",
        top: "10px",
        right: "-10px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
}



export default function Toolbar() {
    const [isActive, setIsActive] = useState(true);

    const { pathname } = useLocation();

    const hasCredentials = useMemo(() => {
        return !!TEST_CREDENTIALS[pathname];
    }, [pathname]);

    return (

        <AnimatePresence>
            {
                hasCredentials && (
                    <div className={styles.header}>
                        <motion.div
                            className={styles.menu}
                            variants={menu}
                            animate={isActive ? "open" : "closed"}
                            initial="closed"
                        >
                            <AnimatePresence>
                                {isActive && <NavMenu />}
                            </AnimatePresence>
                        </motion.div>
                        <Button isActive={isActive} onClick={() => { setIsActive(!isActive) }} label='Keys' />
                    </div>
                )
            }
        </AnimatePresence>
    )
}


