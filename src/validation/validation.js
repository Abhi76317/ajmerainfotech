const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;

export const isEmail = (email) => !!email.match(emailRegex);

export const isName = (name) => !!name.match(nameRegex);