// parses query string to object
export const parseQuery = (queryString) => {
  var query = {};
  var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString)
    .split('&');
  for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

// validates input
// accepts input and rules for validation
// returns validation messages if input is incorrect
// else returns true
export const validate = (input, rules) => {
  if (!rules) {
    return true;
  }
  
  let validateMessage = '';

  // check if input is email
  if (rules.isEmail) {
    const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!emailPattern.test(input)) {
      validateMessage += 'This email is incorrect. ';
    }
  }


  // check if input contains anything
  if (rules.required && input.trim() === '') {
    validateMessage += 'This input is required';
  }

  // check input length
  if (rules.minLength && input.length <=rules.minLength ) {
    validateMessage += `Should conteint  more than ${rules.minLength} characters`
  }

  if (rules.maxLength && input.length >=rules.maxLength) {
    validateMessage += `Should contain not more than ${rules.maxLength} characters`
  }


  return validateMessage === '' ? true : validateMessage;
}