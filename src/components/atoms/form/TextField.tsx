import { FC, InputHTMLAttributes } from 'react';
import { Field, FieldConfig } from 'formik';
import classnames from 'classnames';

const TextField: FC<InputHTMLAttributes<HTMLInputElement> & FieldConfig> = ({ className, ...otherProps }) => {
    return <Field className={classnames('text-field', className)} {...otherProps} />;
};

export default TextField;