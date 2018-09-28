export default (values) => {
  const errors = {};
  if (!values.username ) {
    errors.username = 'This field is required.';
  } else if (!values.password) {
    errors.password = 'This field is required.'
  }

    
  return errors;
};
