const arr = [
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
];

const solution = (arr) => {
  return arr.map((data) => data.reverse());
};

const answer = solution(arr);
// [
//   [ 0, 0, 0, 0, 1 ],
//   [ 0, 0, 0, 0, 1 ],
//   [ 0, 0, 0, 0, 1 ],
//   [ 0, 0, 0, 0, 1 ],
//   [ 0, 0, 0, 0, 1 ]
// ]

console.log(answer);
