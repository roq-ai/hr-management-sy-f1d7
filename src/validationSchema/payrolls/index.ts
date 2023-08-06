import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  payroll_information: yup.string().required(),
  user_id: yup.string().nullable(),
});
