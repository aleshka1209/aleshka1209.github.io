// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.first');

// // console.log(btns[0].classList.length);
// // console.log(btns[1].classList.add('red'));
// // console.log(btns[0].classList.remove('blue'));
// // console.log(btns[0].classList.toggle('blue'));



// // if(btns[1].classList.contains('red')){
// //     console.log('red');
// // }

// btns[0].addEventListener('click', () => {
//     // if(!btns[1].classList.contains('red')){
//     //     btns[1].classList.add('red');
//     // }else{
//     //     btns[1].classList.remove('red');
//     // }
//     btns[1].classList.toggle('red');
// });

// wrapper.addEventListener('click', (event) => {
//     if(event.target && event.target.matches("button.red")){
//         console.log('click button');
//     }
// });

// // btns.forEach(btn => {
// //     btn.addEventListener('click', () => {
// //         console.log('hello');
// //     });
// // });

// const btn = document.createElement('button');
// btn.classList.add('button','red');
// wrapper.append(btn);

const btnModal = document.querySelector('.btn'),
      modal = document.querySelector('.modal__wrapper');

console.log(btnModal);

btnModal.addEventListener('click', () => {
    if(!modal.classList.contains('active')){
        modal.classList.add('active');
    }else{
        modal.classList.remove('active');
    }
});
