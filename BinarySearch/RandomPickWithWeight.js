/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.pre = [];
  this.total = 0;
  for (let el of w) {
    this.total += el;
    this.pre.push(this.total);
  }
  // for(int ele : arrr)
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let target = Math.floor(Math.random() * this.total);
  let left = 0;
  let right = this.pre.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (this.pre[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
