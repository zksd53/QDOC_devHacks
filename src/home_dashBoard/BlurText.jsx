import { motion } from 'framer-motion';

export default function BlurText({ text, delay = 120, className = '' }) {
    const parts = text.split(' ');

    return (
        <p className={className} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {parts.map((part, index) => (
                <motion.span
                    key={index}
                    initial={{ filter: 'blur(10px)', opacity: 0, y: -40 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index * delay) / 1000, ease: 'easeOut' }}
                    style={{ display: 'inline-block' }}
                >
                    {part}
                    {index < parts.length - 1 ? '\u00A0' : ''}
                </motion.span>
            ))}
        </p>
    );
}
