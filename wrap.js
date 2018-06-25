function wrap (string, colNum){
  // passing "" should return ""
  let strToReturn = "";
  let strArr = string.split(' ')
  if(!strArr.length){
    return strToReturn
  } else if(strArr.length === 1){
    strToReturn = string
    return strToReturn
  }
}


module.exports = wrap
