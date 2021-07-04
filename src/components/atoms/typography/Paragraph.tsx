import { FC, HTMLAttributes } from 'react';

const Paragraph: FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, ...otherProps }) => {
    return <p {...otherProps}>{children}</p>
}

export default Paragraph;