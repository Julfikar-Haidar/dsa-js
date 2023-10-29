function isValidIPv4(str) {
  const input = str.split(".");
  if (input.length !== 4) {
    return false;
  }
  return input.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255 && octet === num.toString();
  });
}

module.exports = isValidIPv4;
