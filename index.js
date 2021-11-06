// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"]; 

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`); 
        debugger; 
    }
    return gifts; 
}
wrapGifts(gifts); 

const names = ["Lisa", "Kaitlin", "Jan"]; 

function writeCards(names, event) {
    let writtenCards = []; 
    for (let i = 0; i < names.length; i++) {
        writtenCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`); 
    }
    return writtenCards; 
}

function countDown(integer) {  
    while (integer >= 0) {
        console.log(integer);
        integer--;  
    }
} 
countDown(4); 