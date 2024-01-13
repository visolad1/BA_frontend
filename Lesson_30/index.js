// const man = document.getElementById('man')
// const text3 = document.getElementById('text3')
// const text2 = document.getElementById('text2')
// const text1 = document.getElementById('text1')


// let count = 0

// const handleClick = () => {
//     count += 1
//     switch (count) {
//         case 1:
//             text1.style.display = 'block'
//             break
//         case 2:
//             text2.style.display = 'inline-block'
//             break
//         case 3:
//             text1.style.display = 'none'
//             text2.style.display = 'none'
//             text3.style.display = 'block'
//     }

//     if (count === 3) {
//         text.style.display = 'block'
//     }
// }

// man.addEventListener('click', handleClick)





// const btn = document.getElementById('btn')
// const handleClick = () => {
//     console.log('clicked')
// }

// btn.addEventListener('click', handleClick)

// const man = document.getElementById('man');
// const text1 = document.getElementById('text1')
// const text2 = document.getElementById('text2')
// const text3 = document.getElementById('text3')

// let count = 0

// function handleClick() {
//     count += 1
//     switch (count) {
//         case 1:
//             text1.style.display = 'block'
//             break
//         case 2:
//             text2.style.display = 'block'
//             break
//         case 3:
//             text1.style.display = 'none'
//             text2.style.display = 'none'
//             text3.style.display = 'block'
//             break
//     }
// }

// man.addEventListener('click', handleClick)

// const card = document.getElementById('card')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('closeBtn')
const cardImg = document.getElementById('card-img')
const cardTitle = document.getElementById('card-title')

const showModal = () => {
    modal.style.display = 'flex'
}

const hideModal = () => {
    modal.style.display = 'none'
}

cardImg.addEventListener('click', showModal)
cardTitle.addEventListener('click', showModal)
closeBtn.addEventListener('click', hideModal)