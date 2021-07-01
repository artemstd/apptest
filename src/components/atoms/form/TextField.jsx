import { Field } from 'formik';
import classnames from 'classnames';

const TextField = ({ className, ...otherProps }) => {
    return <Field className={classnames('text-field', className)} {...otherProps} />;
};

export default TextField;