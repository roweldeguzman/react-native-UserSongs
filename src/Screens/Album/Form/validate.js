export default (values) => {
  const errors = {};

  if (!values.title) errors.title = 'This field is required.';
  if (!values.artist) errors.artist = 'This field is required.'


  return errors;
};
