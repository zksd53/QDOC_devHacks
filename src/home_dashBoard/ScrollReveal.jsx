import { useEffect, useMemo, useRef, useState } from 'react';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function ScrollReveal({
    children,
    baseOpacity = 0.1,
    enableBlur = true,
    baseRotation = 3,
    blurStrength = 4,
    className = ''
}) {
    const ref = useRef(null);
    const [progress, setProgress] = useState(0);
    const targetProgressRef = useRef(0);

    useEffect(() => {
        let rafId = 0;

        const update = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const total = window.innerHeight + rect.height;
            const visible = window.innerHeight - rect.top;
            const shouldForceReveal = rect.top <= window.innerHeight * 0.75;
            const next = shouldForceReveal
                ? 1
                : clamp((visible + rect.height * 0.35) / total, 0, 1);
            targetProgressRef.current = next;
        };

        const onScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    useEffect(() => {
        let rafId = 0;

        const animate = () => {
            setProgress((prev) => {
                const next = prev + (targetProgressRef.current - prev) * 0.12;
                return Math.abs(targetProgressRef.current - next) < 0.001
                    ? targetProgressRef.current
                    : next;
            });
            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, []);

    const text = useMemo(() => {
        if (typeof children === 'string') return children;
        return String(children ?? '');
    }, [children]);

    const tokens = useMemo(() => text.split(/(\s+)/), [text]);
    const wordsCount = useMemo(() => tokens.filter((token) => !/^\s+$/.test(token)).length, [tokens]);

    let wordIndex = -1;

    return (
        <p ref={ref} className={`scroll-reveal ${className}`.trim()}>
            {tokens.map((token, index) => {
                const isSpace = /^\s+$/.test(token);
                if (isSpace) {
                    return <span key={`space-${index}`}>{token}</span>;
                }

                wordIndex += 1;
                const start = wordsCount <= 1 ? 0 : (wordIndex / wordsCount) * 0.8;
                const end = start + 0.22;
                const local = clamp((progress - start) / (end - start), 0, 1);
                const opacity = baseOpacity + (1 - baseOpacity) * local;
                const blur = enableBlur ? (1 - local) * blurStrength : 0;
                const rotate = (1 - local) * baseRotation;

                return (
                    <span
                        key={`word-${index}`}
                        style={{
                            opacity,
                            filter: `blur(${blur}px)`,
                            transform: `translateY(${(1 - local) * 6}px) rotate(${rotate}deg)`,
                            display: 'inline-block',
                            willChange: 'opacity, filter, transform'
                        }}
                    >
                        {token}
                    </span>
                );
            })}
        </p>
    );
}
