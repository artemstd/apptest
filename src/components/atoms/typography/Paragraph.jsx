import classnames from 'classnames';

const Paragraph = ({className, children}) => {
    return <p className={classnames('paragraph', className)}>{children}</p>
}

Paragraph.defaultProps = {
    className: ''
};

export default Paragraph;