const dogImage=document.querySelector('#dog-image');
fetch('https://dog.ceo/api/breeds/image/random')
.then(x=> x.json())
.then(y => dogImage.src=y.message)

const boxInput = document.querySelector('#Name');

const thirdsection=document.querySelector('#Third-section')
const items = thirdsection.querySelectorAll(".answer-display-box");
console.log(items)
text1 = document.createElement('p')
text2 = document.createElement('p')
text3 = document.createElement('p')
contentText1=document.createTextNode("-")
contentText2=document.createTextNode("-")
contentText3=document.createTextNode("-")
text1.classList.add("textStyle")
text2.classList.add("textStyle")
text3.classList.add("textStyle")
item1=items[0].appendChild(text1);
item2=items[1].appendChild(text2);
item3=items[2].appendChild(text3);
item1.appendChild(contentText1);
item2.appendChild(contentText2);
item3.appendChild(contentText3);


NationAPI='https://api.nationalize.io/?name=ali'
// Age
fetch(AgeAPI)
.then(x=> x.json())
.then(y => console.log(y))
// // gender
// fetch(GenderAPI)
// .then(x=> x.json())
// .then(y => console.log(y))
// // Nationality
fetch(NationAPI)
.then(x=> x.json())
.then(y => console.log(y))



boxInput.addEventListener('input', (event) => {
    const input = event.target.value;
    const items = thirdsection.querySelectorAll(".answer-display-box");
    AgeAPI='https://api.agify.io/?'+"name="+input
    GenderAPI='https://api.genderize.io/?'+"name="+input
    NationAPI='https://api.nationalize.io/?'+"name="+input
    fetch(AgeAPI)
    .then(x=> x.json())
    .then(y => contentText2.textContent=y.age)

    fetch(GenderAPI)
    .then(x=> x.json())
    .then(y => contentText1.textContent=y.gender)

    // fetch(NationAPI)
    // .then(x=> x.json())
    // .then(y => =y.)
    
    // contentText2.textContent
    // contentText3.textContent
})