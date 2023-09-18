// Stack(premitive), Heap(Non-premitive)
let myYoutubeName ="moinuddin123";
let anothername = myYoutubeName;
anothername = "emon123"; 
console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "rubel123@gmail.com",
    upi:"rubel@ybl",
}
let userTwo = userOne;
userTwo.email = "emon12@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);