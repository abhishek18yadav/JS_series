/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(10002).fill(-1);
    function f(amt){
        if(amt < 0)return Infinity;
        if(amt == 0)return 0;
        if(dp[amt] !== -1)return dp[amt];
        let ans = Infinity;
        for(let i=0; i < coins.length; i++){
            ans = Math.min(ans, f(amt - coins[i]));
        }
        return dp[amt] =  (ans === Infinity) ? ans : 1+ans;
    }
    const res = f(amount);
    return (res === Infinity) ? -1 : res;
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(10002).fill(Infinity);
    function f(amt){
      
        dp[0] =0;
        for(let i = 1; i<= amt; i++){
            for(let j = 0; j<coins.length; j++){
                if(i-coins[j] >= 0){
                    dp[i] = Math.min(dp[i], 1+dp[i-coins[j]])
                }
            }
        }
       
        
        return dp[amt] === Infinity ? -1 : dp[amt];
    }
    const res = f(amount);
    return (res === Infinity) ? -1 : res;
};
