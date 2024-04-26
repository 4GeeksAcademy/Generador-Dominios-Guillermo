let pronoun = ["the", "our", "mine", "yours"];
let adj = ["great", "big", "happy", "brave", "old"];
let noun = ["jogger", "racoon", "pack", "mountain", "river"];

let newArr = [];

// ejemplo1
// for(let i =0;i<pronoun.length;i++){
//   for(let n=0;n<adj.length;n++){
//     for(let x=0;x<noun.length;x++){
//       newArr.push(pronoun[i]+adj[n]+noun[x]+".com")
//     }
//   }
// }
// console.log(newArr)

// ejemplo2
// pronoun.forEach((element) =>
//   adj.forEach((element1) =>
//     noun.forEach((element2) =>
//       newArr.push(element + element1 + element2 + ".com")
//     )
//   )
// );
// console.log(newArr);

//ejemplo3
newArr = pronoun
  .map((element) =>
    adj
      .map((element1) =>
        noun.map((element2) => element + element1 + element2 + ".com")
      )
  )
  .flat(3);
console.log(newArr);