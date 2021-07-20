import { FC, useCallback } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../atoms/button/Button';
import TextField from '../../atoms/form/TextField';
import ErrMessage from '../../atoms/form/ErrMessage';
import { create as createPreOrder } from '../../../api/pre-order';
import { IErrorResponse } from '../../../api/types';
import { IOrderFormProps, IFormikProps } from './types';
import { useMutation } from 'react-query';

const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email adress').required('Required email')
});

const OrderForm: FC<IOrderFormProps> = ({ productId, className }) => {
    const mutation = useMutation(createPreOrder);

    const handleSubmit = useCallback<IFormikProps['onSubmit']>((values, { setSubmitting, setErrors, resetForm }) => {
        mutation.mutate({
            ...values,
            productId
        }, {
            onSuccess: (resp) => {
                resetForm();
                toast.success(resp.data.message);
            },
            onError: (error: IErrorResponse) => {
                if (error.errors) {
                    setErrors(error.errors);
                } else {
                    toast.error(error.error || 'Error has occured');
                }
            },
            onSettled: () => {
                setSubmitting(false);
            }
        });
    }, [productId]);

    const formikProps: IFormikProps = {
        initialValues: {email: ''},
        validationSchema,
        onSubmit: handleSubmit
    }

    return <>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            />
        <Formik {...formikProps}>
            {({ isSubmitting }) => (
                <Form className={className}>
                    <div className="sm:relative">
                        <TextField type="email" name="email" className="sm:pr-72 w-full" placeholder="Email" />
                        <Button className="w-full sm:w-auto mt-1 sm:mt-0 sm:absolute sm:inset-y-1.5 sm:right-1.5" disabled={isSubmitting}>Pre-order Now</Button>
                    </div>
                    <ErrMessage name="email" component="div" className="mt-1 lg:ml-8" />
                </Form>
            )}
        </Formik>
    </>;
};

export default OrderForm;