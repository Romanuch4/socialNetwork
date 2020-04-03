export const required = value => {
  if(value) {
    return undefined;
  };
  return "this field is required";
};

export const minLengthCreator = minLength => value => {
  if (minLength <= value.length) {
    return undefined;
  };
  return `Min length is ${minLength} symbols`;
};

export const maxLengthCreator = maxLength => value => {
  if (maxLength >= value.length) {
    return undefined;
  };
  return `Max length is ${maxLength} symbols`;
};

export const email = value => 
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;