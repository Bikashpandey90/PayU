import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { slideIn } from "./anim";
import { useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { TEST_CREDENTIALS } from "./data";
import { CheckCircle } from 'lucide-react';

interface CredentialItem {
    label: string;
    value: string;
}

export default function NavMenu() {
    const { pathname } = useLocation();
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const config = useMemo(() => {
        return TEST_CREDENTIALS[pathname] || null;
    }, [pathname]);

    const handleCopy = async (value: string, index: number) => {
        try {
            await navigator.clipboard.writeText(value);
            setCopiedIndex(index);

            setTimeout(() => setCopiedIndex(null), 1200);
        } catch (err) {
            console.error("Copy failed");
        }
    };

    if (!config) return null;

    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    config.items.map((item: CredentialItem, i) => (
                        <div key={`b_${i}`} className={styles.linkContainer}>
                            <motion.div
                                custom={i}
                                variants={slideIn}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                            >
                                <div
                                    className={styles.credential}
                                    onClick={() => handleCopy(item.value, i)}
                                >
                                    <span className={styles.label}>
                                        {item.label}
                                    </span>

                                    <span className={styles.value}>
                                        {copiedIndex === i ? (<span className='flex items-center text-center gap-2'>
                                            <CheckCircle className='h-6 w-6' />
                                            Copied
                                        </span>) : item.value}
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    ))
                }
            </div>

            <motion.div
                variants={slideIn}
                className={styles.footer}>
                <span style={{ color: "white", fontSize: 16 }}>
                    {config.title}
                </span>
            </motion.div>
        </div>
    )
}