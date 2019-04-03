/**
 * @param {number[]} nums
 * @return {number}
 */

 // Unusual yet simple JavaScript JS solution
 
var singleNumber = function(nums) 
{
    var set1=new Set();
    var arr=new Array();
    var set_sum=0, arr_sum=0;
    for(let item of nums)
    {
        if(set1.has(item)==true)
        {
            arr.push(item);
        }
        set1.add(item);    
    }
    for(let item of arr)
    {
        arr_sum+=item;
    }
    for(let item of set1)
    {
        set_sum+=item;
    }
    return set_sum-arr_sum;
};