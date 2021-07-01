import { ErrorMessage } from 'formik';
import classnames from 'classnames';

const ErrMessage = ({ className, ...otherProps }) => {
    return <ErrorMessage className={classnames("error-message", className)} {...otherProps} />
};

export default ErrMessage;