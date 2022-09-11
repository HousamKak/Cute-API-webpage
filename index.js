const dogImage=document.querySelector('#dog-image');
fetch('https://dog.ceo/api/breeds/image/random')
.then(x=> x.json())
.then(y => dogImage.src=y.message)
