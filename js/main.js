document.querySelector('button').addEventListener('click', getFetch)


function removeHidden ( element ) {
  document.querySelector(element).removeAttribute("hidden")
}


function getFetch() {
  const choice = document.querySelector('input').value
  console.log(choice)
  
  const url = `https://api.nasa.gov/planetary/apod?api_key=hHhVceH89RuJIbHPB07bRa1xjeFplRZMWV9Sprwj&date=${choice}`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if ( data.media_type === 'image'){
          document.querySelector('.picOfDay').src = data.hdurl
          document.querySelector('iframe').style.display = 'none'; 
          document.querySelector('.picOfDay').style.display = 'block';        
        } else if ( data.media_type === 'video' ) {
          document.querySelector('iframe').src = data.url
          document.querySelector('.picOfDay').style.display = 'none';
          document.querySelector('iframe').style.display = 'block';
        }
        document.querySelector('p').innerText = data.explanation
        removeHidden('h3');
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
};
