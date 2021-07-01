import classnames from 'classnames';

const BlockGray = ({className, children}) => {
    return <div className={classnames('block-gray', className)}>{children}</div>
};

export default BlockGray;