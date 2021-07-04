import { useCallback } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../atoms/button/Button';
import TextField from '../../atoms/form/TextField';
import ErrMessage from '../../atoms/form/ErrMessage';
import { create as createPreOrder } from '../../../api/pre-order';

const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email adress').required('Required email')
});

const OrderForm = ({ productId, className }) => {
    const handleSubmit = useCallback(async (values, { setSubmitting, setErrors, resetForm }) => {
        try {
            if (!productId) {
                throw new Error('No product ID');
            }

            const resp = await createPreOrder({
                ...values,
                productId
            });
            resetForm();
            toast.success(resp.data.message);
        } catch(exception) {
            if (exception.errors) {
                setErrors(exception.errors);
            } else {
                toast.error(exception.error || 'Error has occured');
            }
        }
    
        setSubmitting(false);
    }, [productId]);

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
        <Formik
            initialValues={ {email: ''} }
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
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

OrderForm.defaultProps = {
    productId: 0
};

export default OrderForm;