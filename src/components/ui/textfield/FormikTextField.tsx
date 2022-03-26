import { TextField } from '@mui/material';
import { useField } from 'formik';


interface FormikTextFieldProps {
  name: string,
  label: string,
  helperText?: string,
  required?: boolean,
  endAdornment?: JSX.Element

}

const FormikTextField = (props: FormikTextFieldProps) => {
  const { helperText } = props;
  const [field, meta] = useField(props);

  return (
    <TextField  {...field} {...props}
    error={meta.touched && Boolean(meta.error)}
    helperText={meta.error || helperText}
    fullWidth
    />
  );
};

export default FormikTextField;