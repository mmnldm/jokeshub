const rjg = document.getElementById('rjg');
const rjgUrl = "https://v2.jokeapi.dev/joke/Any"
const djg = document.getElementById('djg');
const djgUrl = "https://icanhazdadjoke.com/"; 
const darkjg = document.getElementById('darkjg');
const darkjgUrl = "https://v2.jokeapi.dev/joke/Dark";
const jokeTitle = document.querySelector('.jokeTitle');
const jokeText = document.getElementById('jokeText');
const copyBtn = document.getElementById('btn-copy');



rjg.addEventListener('click', function(e){
    e.preventDefault();
    jokeTitle.innerHTML = rjg.textContent;
    jokeText.innerHTML = '';
    document.getElementById('btn-generate').setAttribute('id','rjg-btn-generate');

    const generateRjg  = document.getElementById('rjg-btn-generate');
    generateRjg.addEventListener('click', async function getRandomJoke() {

        const response = await fetch(rjgUrl);
        const data = await response.json();
        
        if(data.setup && data.delivery){
            jokeText.innerHTML = `${data.setup}<br>${data.delivery}`;
        } else if(data.joke){
            jokeText.innerHTML = `${data.joke}`
        }

    })

})

djg.addEventListener('click', function(e){
    e.preventDefault();
    jokeTitle.innerHTML = djg.textContent;
    jokeText.innerHTML = '';
    document.getElementById('btn-generate').setAttribute('id', 'djg-btn-generate');

    const generateDjg = document.getElementById('djg-btn-generate');
    generateDjg.addEventListener('click', async function getDadJoke(){

        const request = new Request(djgUrl, {
            headers: {
                Accept: 'application/json',
            }
        })
        const response = await fetch(request)
        const data = await response.json();

        jokeText.innerHTML = data.joke;
    })
    
})

darkjg.addEventListener('click', function(e){
    e.preventDefault();
    jokeTitle.innerHTML = darkjg.textContent;
    jokeText.innerHTML = '';
    document.getElementById('btn-generate').setAttribute('id', 'darkjg-btn-generate');

    const generateDarkj= document.getElementById('darkjg-btn-generate');
    generateDarkj.addEventListener('click', async function getDarkJoke() {

        const request = new Request(darkjgUrl)
        const response = await fetch(request)
        const data = await response.json();

        console.log(data)

        if(data.setup && data.delivery){
            jokeText.innerHTML = `${data.setup}<br>${data.delivery}`;
        } else if(data.joke){
            jokeText.innerHTML = `${data.joke}`
        }
    })



    
})

// * COPY TO CLIPBOARD

copyBtn.addEventListener('click', async () =>{
    try {
        await navigator.clipboard.writeText(jokeText.textContent);
        copyBtn.textContent = 'Copied'
        copyBtn.classList.add('copyColor');
        setTimeout(() => {
            copyBtn.textContent = 'Copy Joke'
            copyBtn.classList.remove('copyColor');
        }, 500);
    }
    catch (err){
        console.error(err);
    }
})

// * Request Button Click
const getRequest = document.querySelector('request');

getRequest.addEventListener('click', function(){
    
})