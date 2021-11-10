import * as Yup from 'yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';

// material
import { Link, Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useGlobalContext } from 'src/global_context/GlobalContext';
// ----------------------------------------------------------------------

export default function ResetpassForm() {
  const { resetPass, setLoading, displayMessage } = useGlobalContext();
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: async ({ email, password }) => {
      setLoading(true);
      try {
        await resetPass(email);
        displayMessage('info', 'Check your email inbox for the next step', 7000);
        navigate('/login', { replace: true });
      } catch (e) {
        displayMessage('warning', 'Invalid email', 4000);
        console.log('there is an error while login', e);
      }
      setLoading(false);
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
        </Stack>

        <br />
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Reset the password
        </LoadingButton>
        <div style={{ textAlign: 'center' }}>
          <Link component={RouterLink} variant="subtitle2" to="/login">
            Login
          </Link>
        </div>
      </Form>
    </FormikProvider>
  );
}
