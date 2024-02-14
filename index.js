/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    
    const Counter = (arr) => {
        const counter = new Map()

        for(let num of arr){
            if(num%2 === 0)
                counter.set(num,(counter.get(num) || 0) + 1);
        }
        return counter;
    }

    const even_nums_counter = Counter(nums);
    
    let count = 0;
    let most_frequent_element = -1;
    
    for(let element of even_nums_counter){
        if(element[1] > count || (element[1] == count && element[0] < most_frequent_element)){
            count = element[1];
            most_frequent_element = element[0];
        } 
    }
    
    return most_frequent_element;
};
