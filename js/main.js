//Example fetch using pokemonapi.co

const choice = document.querySelector('input').value
const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&&date=`+choice

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data) 
      document.querySelector('h2').innerText = data.title
      document.querySelector('h1').innerText = `The Nasa picture of ${data.date}`
      if (data.media_type == 'image' ) {document.querySelector('img').src = data.url ;
    document.querySelector('iframe').classList.add('hidden')} else {
        document.querySelector('iframe').src = data.url 
      }
      document.querySelector('section.center p').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&&date=`+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data) 
        document.querySelector('h2').innerText = data.title
        document.querySelector('h1').innerText = `The Nasa picture of ${data.date}`
        if (data.media_type == 'image' ) {document.querySelector('img').src = data.url 
      document.querySelector('iframe').classList.add('hidden')
      document.querySelector('img').classList.remove('hidden')} 
      else {
          document.querySelector('iframe').src = data.url 
          document.querySelector('iframe').classList.remove('hidden')
          document.querySelector('img').classList.add('hidden')
        }
        document.querySelector('section.center p').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

