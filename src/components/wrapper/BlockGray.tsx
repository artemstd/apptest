import { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';

const BlockGray: FC<HTMLAttributes<HTMLDivElement>> = ({ className, children }) => {
    return <div className={classnames('block-gray', className)}>{children}</div>
};

export default BlockGray;