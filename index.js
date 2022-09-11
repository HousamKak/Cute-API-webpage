// This is the dog image
const dogImage=document.querySelector('#dog-image');
fetch('https://dog.ceo/api/breeds/image/random')
.then(x=> x.json())
.then(y => dogImage.src=y.message)

const boxInput = document.querySelector('#Name');

// Here I am appending a p node then a text node to each of the boxes that I want to write the age, gender, and nationality in. This looks stupid
// to do, I am sure there is a more efficient method, but this is how it worked for the time being
const thirdsection=document.querySelector('#Third-section')
const items = thirdsection.querySelectorAll(".answer-display-box");
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


boxInput.addEventListener('input', (event) => {

    // Including the name in the API
    const input = event.target.value;
    const items = thirdsection.querySelectorAll(".answer-display-box");
    AgeAPI='https://api.agify.io/?'+"name="+input
    GenderAPI='https://api.genderize.io/?'+"name="+input
    NationAPI='https://api.nationalize.io/?'+"name="+input

    // Fetching APIs
    fetch(AgeAPI)
    .then(x=> x.json())
    .then(y => contentText2.textContent=y.age)

    fetch(GenderAPI)
    .then(x=> x.json())
    .then(y => {contentText1.textContent=y.gender})

    // Here I am trying to put all the nationalities
    fetch(NationAPI)
    .then(x=> x.json())
    .then(y => {
        countries='';
        for(let i=0;i<y.country.length;i++)
        {countries+=y.country[i].country_id+" prob: "+y.country[0].probability+'\n';}
        console.log(countries);
        contentText3.textContent=countries})
    })