function rangeOfNumber(start, end) {
  if (start > end) {
    return [];
  } else {
    const numbers = rangeOfNumber(start, end - 1);
    numbers.push(end);
    return numbers;
  }
}

//function(1,5)=>[1,2,3,4,5]
//function(1,4)=>[1,2,3,4]
//function(1,3)=>[1,2,3]
//function(1,2)=>[1,2]
//function(1,1)=>[1]
//function(1,0)=>base case =>[]

console.log(rangeOfNumber(1, 5));
