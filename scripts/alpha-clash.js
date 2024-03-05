//function play()
//{
 //   const homeSection = document.getElementById('home-screen');
 //   homeSection.classList.add('hidden');
    //console.log(homeSection.classList);

 //   const playGroundSection = document.getElementById('play-ground');
    
 //   playGroundSection.classList.remove('hidden')
    //console.log(playGroundSection);
//}

function continueGame()
{
   const alphabet = getRandomAlphabet();
   console.log('your random value',alphabet);

   const currentAlphabetElement = document.getElementById('current-alphabet');
   currentAlphabetElement.innerText = alphabet;

   setBackgroundColorById(alphabet)
}

function play()
{
    hideElementByID('home-screen');
    showElementByID('play-ground');
    continueGame()
}