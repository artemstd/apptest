import { RefObject, useEffect } from "react";

interface IParams extends Omit<IntersectionObserverInit, 'root'> {
    callback: () => void,
    enabled: boolean,
    target: RefObject<Element>,
    root?: RefObject<Element | Document | null>
}

const useIntersectionObserver = ({
    root,
    rootMargin,
    threshold,
    enabled,
    callback,
    target
}: IParams) => {
    const rootEl = root ? root.current : null;

    useEffect(() => {
        if (!enabled) {
            return;
        }

        const el = target.current;
        if (!el) {
            return;
        }

        let observer = new IntersectionObserver((entries) => {
            entries.map(entry => entry.isIntersecting && callback());
        }, {
            root: rootEl,
            rootMargin,
            threshold
        });

        observer.observe(el);

        return () => observer.unobserve(el);
    }, [enabled, target.current, rootEl, rootMargin, threshold, callback]);
}

export default useIntersectionObserver;