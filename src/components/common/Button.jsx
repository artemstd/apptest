import { forwardRef } from 'react';

export default forwardRef(function Button({ children, onClick, href }, ref) {
    return <a ref={ref} href={href} onClick={onClick} className="transition-transform duration-300 transform hover:-translate-y-1 rounded-full bg-black shadow-btn text-white base-sm sm:text-2xl px-6 py-4 sm:px-8 sm:py-5">
        {children}
    </a>;
})