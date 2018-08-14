module.exports = function main(str) {
  // Write your code here
  var arr = str.split('');
  var sum = eval(arr.join("+"));
  return sum ;
};
