
let dp = [];
function f(n) {
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
 


let n = 6;
for (let i = 0; i <= n; i++){
    dp[i] = -1;
}


const ans = f(n);
console.log(ans);
