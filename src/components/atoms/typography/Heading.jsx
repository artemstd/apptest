const Heading = ({size, className, children}) => {
    const TagName = `h${size}`;
    return <TagName className={className}>{children}</TagName>
};

Heading.defaultProps = {
    size: 1
};

export default Heading;