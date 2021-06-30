import classnames from 'classnames';

const Heading = ({size, className, children}) => {
    return <h1 className={classnames(`heading-${size}`, className)}>{children}</h1>
};

Heading.defaultProps = {
    size: 1,
    className: ''
};

export default Heading;