export default (values) => {
  const errors = {};

  if (!values.first_name) errors.first_name = 'This field is required.';
  if (!values.last_name) errors.last_name = 'This field is required.'
  if (!values.email) errors.email = 'This field is required.'

  return errors;
};
