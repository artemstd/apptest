import { FC, HTMLAttributes } from 'react';

interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    size?: 1 | 2 | 3 | 4 | 5 | 6
};

const Heading: FC<IHeadingProps> = ({ size, className, children }) => {
    const TagName = `h${size}` as keyof JSX.IntrinsicElements;
    return <TagName className={className}>{children}</TagName>
};

Heading.defaultProps = {
    size: 1
};

export default Heading;