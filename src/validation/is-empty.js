//checks if the value is empty
const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

//create an error object if error exists
const setError = data => {
  let errors = {};
  Object.entries(data).forEach(([key,value])=>{
    if(isEmpty(value) && key !== 'degree' && key !== 'institution' && key !== 'modeOfContact'){
      errors[`${key}`] = `${key} cannot be empty`
    }
  })
  return errors;
}

module.exports = {
  isEmpty,
  setError
}
