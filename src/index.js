
module.exports = function towelSort (matrix) {

  if(!matrix || matrix.leghth === 0){
  return [];
  } else{
    return matrix.map((element, index) => index % 2 === 0 ? element : element.reverse()).flat();
  }
}
