// // 1
// const arr = [1, 2, 3];
// arr[1] = 10;
// console.log(arr);
// // 2
// const lines = ["Перший рядок", "Четвертий рядок", "Третій рядок"];
// lines.push("Четвертий рядок");
// console.log(lines);
// // 3
// const numbers = [1, 2, 5, 7, 88];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);
// // 4
// const arr2 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }
// 5
// const fiveLines = ["Dota", "Maincraft", "Terraria", "GTA", "Fifa"];
// for (let i = 0; i <= fiveLines.length; i++) {
//   if (fiveLines[i].length > 5) {
//     console.log(fiveLines[i]);
//   }
// }
// 6
let arr = [12, 45, 7, 23, 56, 89, 34, 11, 67, 25];

let maxValue = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxValue) {
    maxValue = arr[i];
  }
}

console.log(maxValue);
// 7
let numbers = [12, 45, 7, 23, 56, 89, 34, 11, 67, 25, 20, 2];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}
