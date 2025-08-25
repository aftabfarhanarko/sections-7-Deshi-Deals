function call(valu) {
  let element = document.getElementById(valu);
  return element;
}

// Event Delegation .children[0].children[0]

document
  .getElementById("producat-box-sections")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("btn-all")) {
      //    alert('click This ');

      // Card Find Img
      let cardsBtn = e.target;
      let producatImg = cardsBtn.parentNode.children[0].children[0].src;

      // Card Find Producat Name
      let cardName = e.target;
      let producatName = cardName.parentNode.children[1].children[1].innerText;

      // Card Find Producat Price

      let cardPrice = e.target;
      let producatPrice =cardPrice.parentNode.children[1]
      .children[2].children[0].innerText;

      // Total Price
      let total = document.getElementById("totalprices").innerText;

      let producatPriceTotal = Number(producatPrice) + Number(total);

    //   Find cardes
       let cardesCointernar = document.getElementById('addes');
      // Add Cardes
      let newCard = document.createElement("addes");

      newCard.innerHTML = `
         <div class="border-1 border-gray-300 flex items-center justify-between py-2 px-2 rounded-lg bg-[#eeebeb] mb-2">
            <img src="${producatImg}" alt="">
                <div>
                  <h2 class="font-bold text-[18px]">${producatName}</h2>
                  <p class="font-bold text-[18px] text-red-600">${producatPrice}tk</p>
                </div>                         
         </div>
      
      `;
   
      cardesCointernar.appendChild(newCard);

    //   Total Price er  kaj Hoy nai akhno ..?
      let qunatieyPrice = document.getElementById('totalprices').innerText;

      // console.log(qunatieyPrice);

      let myBlance = Number(producatPrice) + Number(qunatieyPrice);

      let totalDiscountPrice = document.getElementById('discounts').innerText;
      let totalesq =  myBlance - totalDiscountPrice;
      console.log(totalDiscountPrice);
     document.getElementById('totalprices').innerText = myBlance;
     let demo = document.getElementById('totalesProducatPrice').innerText;

     document.getElementById('totalesProducatPrice').innerText = totalesq;

    //  Clear All Btn Click

    let clear = document.getElementById('clear-all-prices').addEventListener('click', function () {
       document.getElementById('addes').innerText = " ";
       document.getElementById('totalesProducatPrice').innerText =  "0";
       document.getElementById('totalprices').innerText = "0";
       
    })
     console.log(demo);
      
    // document.getElementById('totalprices').innerText = myBlance;
      
    }
  });


