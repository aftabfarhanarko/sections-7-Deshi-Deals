

function call (valu){
  let element = document.getElementById(valu);
  return element
}


// Event Delegation .children[0].children[0]

document.getElementById('producat-box-sections').addEventListener("click", function (e) {
    if(e.target.className. includes('btn-all')){
    //    alert('click This ');

    // Card Find Img
    let cardsBtn = e.target;
    let producatImg = cardsBtn.parentNode.children[0].children[0].src;

    // Card Find Producat Name
    let cardName = e.target;
    let producatName = cardName.parentNode.children[1].children[1].innerText;


    // Card Find Producat Price
 
    let cardPrice = e.target;
    let producatPrice = cardPrice.parentNode.children[1].children[2].children[0].innerText;

    console.log(producatImg, producatName,producatPrice);
    }
})

// Test 