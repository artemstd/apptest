import { forwardRef } from 'react';

export default forwardRef(function Button(props, ref) {
    return <a ref={ref} {...props} className={`${props.className} text-center inline-block cursor-pointer rounded-full bg-black shadow-btn text-white text-base-sm sm:text-2xl px-6 py-4 sm:px-8 sm:py-5`} />;
})