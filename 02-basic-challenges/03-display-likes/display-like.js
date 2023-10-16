function displayLikes(name) {
  // Get the name of the array
  const length = name.length;

  // Return the appropriate string based on the length of the array
  if (length === 0) {
    return "no one likes this";
  } else if (length === 1) {
    return `${name[0]} likes this`;
  } else if (length === 2) {
    return `${name[0]} and ${name[1]} like this`;
  } else if (length === 3) {
    return `${name[0]}, ${name[1]} and ${name[2]} like this`;
  } else {
    return `${name[0]}, ${name[1]} and ${length - 1} others like this`;
  }
}

module.exports = displayLikes;
