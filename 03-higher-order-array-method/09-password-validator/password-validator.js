function validatePassword(pass) {
  const isLength = pass.length >= 8;

  const hasUppercase = pass
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasLowercase = pass
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasDigit = pass.split("").some((char) => !isNaN(parseInt(char, 10)));

  return hasDigit && hasUppercase && hasLowercase && isLength;
}

module.exports = validatePassword;
