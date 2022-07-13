const palindromes = function (string) {
  const stringArray = string.split('');
  const filteredArray = stringArray.filter(word => word.toLowerCase() !== word.toUpperCase());
  const filteredArrayReversed = stringArray.filter(word => word.toLowerCase() !== word.toUpperCase()).reverse();

  if(filteredArray.join('').toLowerCase() === filteredArrayReversed.join('').toLowerCase()){
    return true;
  }else{
    return false;
  };
  
}

// Do not edit below this line
module.exports = palindromes;
