//arr_func.js

//jsavascript 에서 배열에 관련되어 사용하는 함수


let arr = [10, 20, 30, 40];

// console.log(arr);


// 1) forEach 함수  : 반복처리
arr.forEach(() => {
    console.log('forEach 반복');
})


// 10 , 20 , 30 받아서 처리
arr.forEach((value) => {
    console.log('forEach 반복' + value);
})


// 2) map 함수  : 반복 + return하고 값에 영향을 줄수있는
arr.map((item) => {
    console.log('map반복' + item);
})

arr.map((item, index) => {    //   item : 배열에 있는 값. index : 해당 순서 인덱스 주입
    console.log('map반복 : 값 ' + item + '인덱스' + index + '배열[index]' + arr[index]);
})


//[10 ,20, 30, 40] > [99 ,99 ,99 ,99]
let mapResult1 = arr.map(() => {
    return 99;
})

console.log(mapResult1);


let mapResult2 = arr.map((item)=>{
    console.log(item);
})

console.log(mapResult2); // map에 return이 없음

//[10, 20, 30, 40] -> [110, 120, 130, 140]
let mapResult3 = arr.map((item)=>{
                    return item + 100;
                })
console.log(mapResult3);

let mapResult4 = arr.map((item)=>{
                    return  "가지고 있는 값은 : " + item + '입니다';
                })
console.log(mapResult4);


let menuArr = ['김밥', '돈가스', '우동'];
let mapResult5 = menuArr.map((item) =>{
  return '<P>' + item+ ' </P>';
})

console.log(mapResult5);

                        //()=>code      ()=>{ return code; }
let mapResult6 = arr.map((item)=>'<p>' + item + '</p>')
console.log(mapResult6);



arr = [10,20,30,40];
//3) filter
// 필터링 :  조건에 맞는 값들만 보겠다!
console.log('========================= filter ==================================')
let result7 = arr.filter(()=>{
    return true;
});
console.log(result7);

let result8 = arr.filter((num)=>{
    return num >= 30;
});
console.log(result8);


let result9 = arr.filter((num)=>{
    return num != 20;
});
console.log(result9);
//4) find
let result10 = arr.find((value)=>{
    return value == 40;
})
console.log(result10);

let result11 = arr.find((value)=>{
    return value == 60;
})
console.log(result11)
//찾는 값이 없으면 undefined  (검색한게 안나오면?)

//5) findIndex 
console.log('----------findIndex------------');
let result12 = arr.findIndex((value)=>{
    return value == 40;
})
console.log(result12)

let result13 = arr.findIndex((value)=>{
    return value == 60;
})
//찾는 값이 없으면?? -1
console.log(result13)