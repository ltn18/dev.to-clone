/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  squareSum(n);
  return n == 1? true : false; 
};

function breakDigits(n) {
  var res = [];
  while (n >= 1){
    res.unshift(n % 10);
    n = (n- n % 10)/10;
  }
  return res;
}

function squareSum(n) {
  if (n < 10) return n; 
  var digs = breakDigits(n);
  var sS = 0;
  for (let i = 0; i < digs.length; i++){
    sS += digs[i]*digs[i];
  }
  console.log(sS);
  squareSum(sS);
}

console.log(squareSum(19));
//console.log(isHappy(19));

