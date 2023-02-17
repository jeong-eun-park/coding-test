/*
배열을 입력 받아 index가 짝수라면 해당 값에 2를 곱하고, 홀수라면 해당 값을 그대로 담아 새로운 배열로 반환하는 함수 solution을 완성해주세요.

입력 예시 1)
[1,2,3,4,5]

출력 예시 1)
[2,2,6,4,10]

입력 예시 2)
[70,85,4,63,30]

출력 예시 2)
[140,85,8,63,60]
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const solution = (arr) => {
  return arr.map((data, index) => (index % 2 === 0 ? data : data * 2));
};

const answer = solution(arr);

console.log(answer);
