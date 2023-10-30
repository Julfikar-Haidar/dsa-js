// function findMissingLetter(arr) {
//   let start = arr[0].charCodeAt(0);
//   console.log("start", start);
//   const missingCharCode = arr
//     .slice(1)
//     .map((char) => char.charCodeAt(0))
//     .find((current) => {
//       if (current - start > 1) {
//         return true;
//       }
//       start = current;
//       return false;
//     });

//   return missingCharCode ? String.fromCharCode(missingCharCode - 1) : "";
// }

function findMissingLetter(arr) {
  const missingCharCode = arr.filter((char, index) => {
    if (index === 0) {
      console.log(index, "if");
      return false;
    }
    console.log(index, "index", char, "==", arr[index - 1].charCodeAt(0));

    // `prevCharCode` is the character code of the previous character
    const prevCharCode = arr[index - 1].charCodeAt(0);
    const currentCharCode = char.charCodeAt(0);
    return currentCharCode - prevCharCode > 1;
  })[0];
  console.log("missingCharCode", missingCharCode);
  return missingCharCode
    ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
    : "";
}

module.exports = findMissingLetter;
