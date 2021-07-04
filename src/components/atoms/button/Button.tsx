import { FC, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, children, ...otherProps }) => {
    return <button className={classnames('button', className)}  {...otherProps}>{children}</button>
};

export default Button;