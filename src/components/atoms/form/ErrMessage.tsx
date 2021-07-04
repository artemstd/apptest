import { FC } from 'react';
import { ErrorMessage, ErrorMessageProps } from 'formik';
import classnames from 'classnames';

const ErrMessage: FC<ErrorMessageProps> = ({ className, ...otherProps }) => {
    return <ErrorMessage className={classnames("error-message", className)} {...otherProps} />
};

export default ErrMessage;