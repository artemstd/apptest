import { forwardRef } from 'react';
import classnames from 'classnames';
import { ILinkProps } from './types';

const Link = forwardRef<HTMLAnchorElement, ILinkProps>(({ isButtonStyle, className, children, ...otherProps }, ref) => {
    const cls = classnames(
        { button: isButtonStyle },
        className
    ) || undefined;
    return <a ref={ref} className={cls} {...otherProps}>{children}</a>
});

Link.defaultProps = {
    isButtonStyle: false
};

export default Link;