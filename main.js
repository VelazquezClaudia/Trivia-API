const card = document.querySelector('.trivia-card');

const image = document.createElement('img');
image.setAttribute('src', 'laptop.png');
image.setAttribute('alt', 'Laptop desk set up, a cactus, lamp, and mug.');
image.setAttribute('width', 471);
image.setAttribute('height', 400);
const laptopImage = document.getElementById("laptopImage");
laptopImage.appendChild(image);

const baseURL = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';

const submitBtn = document.getElementById('submit');

document.addEventListener('DOMContentLoaded', () => {
  const random = getRandomInt(0, 10);
  getTrivia(random);
});

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getTrivia = async (id) => {
      try {
        console.log(id);
        
        const response = await fetch(baseURL); 
        const data = await response.json();
        
          //Handle data here
        const question = document.createElement('h2')
        question.innerHTML = data.results[id].question;

        const answer = document.createElement('p')
        answer.innerHTML = data.results[id].correct_answer;
      
        submitBtn.addEventListener('click', (event) => {
              submitBtn.innerHTML = `
              <button onclick="location.reload()">${answer.innerHTML}</button>              
              `; 
            });

        card.appendChild(question)
        
       } catch (error) {
         console.log('Error:',error);
       }
    };
