const rjg = document.getElementById('rjg');
const rjgUrl = "https://v2.jokeapi.dev/joke/Any"
const djg = document.getElementById('djg');
const djgUrl = "https://icanhazdadjoke.com/"; 
const cnjg = document.getElementById('cnjg');
const jokeTitle = document.querySelector('.jokeTitle');
const jokeText = document.getElementById('jokeText');



rjg.addEventListener('click', function(e){
    e.preventDefault();
    jokeTitle.innerHTML = rjg.textContent;
    document.getElementById('btn-generate').setAttribute('id','rjg-btn-generate');

    const generateRjg  = document.getElementById('rjg-btn-generate');
    generateRjg.addEventListener('click', async function getRandomJoke() {

        const response = await fetch(rjgUrl);
        const data = await response.json();
        jokeText.innerHTML = `${data.setup}<br>${data.delivery}`

    })

})

djg.addEventListener('click', function(e){
    e.preventDefault();
    jokeTitle.innerHTML = djg.textContent;
    document.getElementById('btn-generate').setAttribute('id', 'djg-btn-generate')

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
        console.log(data);
    })
    
})

cnjg.addEventListener('click', function(e){
    e.preventDefault();
    jokeTitle.innerHTML = cnjg.textContent;
})
