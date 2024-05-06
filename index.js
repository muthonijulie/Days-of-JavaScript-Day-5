//Apply transform over each element in the array

//arrays
//const arr=[4,5,6];
//arr.push(8);
//arr.unshift(6);
//arr.pop(6);
//arr.shift(6);
//console.log(arr);

//for(let i=0;i<arr.length;i++)
//for(let i of arr)// i is the actual element
   // for(let i in arr)
   /* {
console.log([i]);
}*/

//array.map method
// const newArr=arr.map(item,index,arr=> item*2);

// console.log(newArr);
const arr=[1,2,3];
function plusone(n){
    return n+1;
}
function plusI(n,i){
    return n+i;
}
function constant(){
    return 42;
}
//used the map method
const map=function(arr,fn){
    const result=[];
for(let i in arr){
    result.push(fn(arr[i],Number(i)));
}
return result;
};
console.log(map(arr,plusone));
console.log(map(arr,plusI));
console.log(map(arr,constant));