// const btn = document.getElementById("fetchDogbtn")
// const image = document.getElementById("dogImage")

// function fetchDog() {
//     return new Promise((resolve,reject)=>{
//      fetch("https://dog.ceo/api/breeds/image/random")
//      .then((response)=>{
//         console.log("Response received:",response);
//       return response.json();
//      })
// .then((data)=>{
//     resolve(data);
// }).catch((error)=>{
//     reject(error);
// });
//     });
// };


// btn.addEventListener("click",()=>{
//     console.log("Fetchng a random dog picture...");
//     fetchDog()
//     .then((data)=>{
//   console.log("Data fetched from API:",data);
//   image.src = data.message;
//     }).catch((error)=>{
//     image.src= error
//     })
// })


