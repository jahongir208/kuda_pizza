"use strict"
window.addEventListener('DOMContentLoaded', () =>{


// bars
let icon = document.querySelector('.bars');
// let span = document.querySelector('span');
let menu = document.querySelector('.menu');

icon.addEventListener('click',()=>{
    icon.classList.toggle('change')
    menu.classList.toggle('close')
    
})

///scroll
// window.onscroll = function scrollFunction(){
//   console.log(salom);
//   if(document.documentElement.scrollTop > 40){
//     document.querySelector('.items').style.opacity = 1
//   }else{
//     document.querySelector('.items').style.opacity = 0
//   }
// }

window.addEventListener('scroll', ()=>{
  // console.log('salom');
  if(document.documentElement.scrollTop > 40){
    document.querySelector('.items').style.opacity = 1
    document.querySelector('.navbar').style.position = 'fixed'
    document.querySelector('.navbar').style.left = '0'
    document.querySelector('.navbar').style.top = '0'
    document.querySelector('.navbar').style.right = '0'
  }else{
    document.querySelector('.items').style.opacity = 0
    document.querySelector('.navbar').style.position = 'absolute'
    document.querySelector('.navbar').style.top = '100%'
    document.querySelector('.hero').style.margin = '70px 0'
    
  }
})




// drugoe
let drug = document.querySelector('.link-item-drug')
let drugoe = document.querySelector('.items .drugoe')
    drug.addEventListener('click', ()=>{
    drugoe.classList.toggle('close')
})



//vremya 
let minut = document.querySelector('.minut'),
   second = document.querySelector('.second');
let setSecond = 60,
    setMinut = 30

let timing = setInterval(() => {
      minut.textContent = setMinut
      second.textContent = setSecond
      setSecond--;
      if(setSecond == 0){
        setSecond = 60;
        setMinut--;
      }

    }, 1000);
  

setInterval(() =>{
 if( minut.textContent == 0){
  clearInterval(timing) 
    minut.textContent == "--"
    second.textContent == "--"
 } 

}, 1000)


// account ====================//
let about = document.querySelector('.about')
let userBtn = document.querySelector('.nav-time .user')
let userBars = document.querySelector('.menu a')
let delBtn = document.querySelector('.about i')

userBtn.addEventListener('click', () =>{
    about.classList.toggle('close')
})

delBtn.addEventListener('click', () =>{
  // about.style.display = 'none'
  about.classList.toggle('close')
})

userBars.addEventListener('click', () =>{
  about.classList.toggle('close')
})

let number = document.querySelector('#tell')
let selKod = document.querySelector('.selkod')
let kod = document.querySelector('.kod')
let mark = document.querySelector('.kod i')
let time = document.querySelector('.kod p span')
let allert = document.querySelector('.allert')
let z = 60
const numberPhone = ['998908285952' , '998901850968', '999915524064']
const randomCode = [1234, 3456,  4565, 4455, 6789, 7685, 3456, 3456, 3344, 1234 ]
const pass = Math.floor(Math.random() * 10)
// tell.value = 998

selKod.addEventListener('click', () =>{
  if(number.value == ''){
    allert.style.display = 'block'
    allert.textContent = 'Telefon raqam kiriting'
    // alert('Telefon raqam kiriting')
    number.style.border = '1px solid red' 
    setTimeout(() => {
      allert.style.display = 'none'
    }, 5000);

}else {
  numberPhone.forEach((val) =>{
    if(number.value == val){
      // let pass = Math.ceil(Math.random() * 10000)
      allert.style.display = 'block'
      allert.textContent =  randomCode[pass]
      // allert.textContent = randomCode[0]
      
      setTimeout(() => {
        allert.style.display = 'none'
      }, 5000);

      kod.style.display = 'block'
      // kod.classList.contains('close')
      kod.classList.toggle('close')

      let timer = setInterval(() =>{
        time.textContent = z
        z--
        if(time.textContent == 0){
          clearInterval(timer)
      
         if(passWord.value == ''){
          qaytBtn.style.display = 'block'
          
        }
      }
    
    }, 1000)
    }
  })
}






// if(number.value == numberPhone[0] ){
//   let pass = Math.ceil(Math.random() * 10000)
//     allert.style.display = 'block'
//     allert.textContent = pass
//     // alert(pass)
//     setTimeout(() => {
//       allert.style.display = 'none'
//     }, 5000);

//     kod.style.display = 'block'
//     // kod.classList.contains('close')
//     kod.classList.toggle('close')
    
//     let timer = setInterval(() =>{
//       time.textContent = z
//       z--
//       if(time.textContent == 0){
//         clearInterval(timer)
    
//        if(passWord.value == ''){
//         qaytBtn.style.display = 'block'
        
//       }
//     }
  
//   }, 1000)
    
//   }

})

let passWord = document.querySelector('#cc-word')
let vhodBtn = document.querySelector('.kod .vhod')
let qaytBtn = document.querySelector('.qayta')
// let site = document.querySelector('.site')
// let cod = randomCode[pass]

vhodBtn.addEventListener('click', () =>{
  randomCode.forEach((cod) =>{
    if(passWord.value !== cod){
      qaytBtn.style.display = 'none'
      document.querySelector('.kod').style.display = 'none'
      document.querySelector('.kod').classList.toggle('open')
      document.querySelector('.about').classList.toggle('open')
      document.querySelector('.about').style.display = 'none'
      userBtn.style.display = 'none'
      document.querySelector('.my').style.display = "block"
      document.querySelector('.menu .user').style.display = 'none'
      document.querySelector('.menu .my').style.display = 'block'

      let z = 60
      let timerTwo = setInterval(() =>{
        
        time.textContent = z
         z--
        if(time.textContent == 0){
           clearInterval(timerTwo)
        }
      
       }, 1000)
       // clearInterval(timer)
    }else {
      allert.style.display = 'block'
      allert.textContent = 'Hato'
      setTimeout(() => {
        allert.style.display = 'none'
      }, 3000);
      // alert('hato')
    }
  })

  document.querySelector('.my').addEventListener('click',() =>{
    document.querySelector('.my-acco').classList.toggle('close')
  })
  document.querySelector('.menu .my').addEventListener('click',() =>{
    document.querySelector('.menu .my-acco').classList.toggle('close')
  })


  // if(passWord.value == pass){
  //   //  history.forward(alert('ok'))
  
  //  qaytBtn.style.display = 'none'
  //  document.querySelector('.kod').style.display = 'none'
  //  document.querySelector('.kod').classList.toggle('open')
  //  document.querySelector('.about').classList.toggle('open')

  //  let z = 60
  //  let timerTwo = setInterval(() =>{
     
  //    time.textContent = z
  //     z--
  //    if(time.textContent == 0){
  //       clearInterval(timerTwo)
  //    }
   
  //   }, 1000)
  //   // clearInterval(timer)

// }else {
//   alert('hato')
// }

})


qaytBtn.addEventListener('click', () =>{
  allert.style.display = 'block'
  allert.textContent = randomCode[pass]
  setTimeout(() => {
    allert.style.display = 'none'
  }, 3000);
  // let ran = Math.ceil(Math.random() * 10000);
  // alert(ran);
  // history.back('about')
})

mark.addEventListener('click', () =>{
   kod.style.display = ' none'
   
})






});


document.addEventListener('DOMContentLoaded', () => {
  const cartPriceElement = document.querySelector('.logotip .span-text-box ');
  let totalPrice = 0;

  const updateCartPrice = () => {
      cartPriceElement.textContent = totalPrice.toFixed();
  };

  document.querySelectorAll('.btn_group button').forEach(button => {
      button.addEventListener('click', () => {
          const productDiv = button.closest('.btn_group');
          const productPrice = parseFloat(productDiv.getAttribute('data-price'));
          totalPrice += productPrice;
          updateCartPrice();
      });
  });
});

