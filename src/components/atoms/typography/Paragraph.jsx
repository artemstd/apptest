import classnames from 'classnames';

const Paragraph = ({className, children}) => {
    return <p className={classnames('paragraph', className)}>{children}</p>
}

export default Paragraph;