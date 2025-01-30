const btn = document.getElementById("fetchDogbtn")
const container = document.querySelector(".container")
const errmessage = document.getElementById("errmessage")

async function tenDog(num){
    try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random/${num}`);
        // console.log(response);
        const data = await response.json();
        return data;       
    }
    catch(error){
        throw new Error("Failed to fetch data");
        
    }
}
btn.addEventListener("click", async ()=>{
try{
    const data = await tenDog(10)
    console.log(data)
    data.message.forEach((imgURL) => {
        const newimage = document.createElement('img')
        newimage.setAttribute('src',imgURL)
        container.appendChild(newimage)
    });
}catch(error){
 errmessage.textContent = error
}
})