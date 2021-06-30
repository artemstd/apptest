import { forwardRef } from 'react';
import classnames from 'classnames';

const Button = forwardRef(({ className, href, onClick, children }, ref) => {
    return <a ref={ref} href={href} onClick={onClick} className={classnames('button', className)}>
        {children}
    </a>;
});

Button.defaultProps = {
    className: '',
    href: '#'
};

export default Button;