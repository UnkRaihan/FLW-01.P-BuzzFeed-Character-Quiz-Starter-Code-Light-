document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");


  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.

  let image;
  let result;
  let score = 0;


  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.

    qu1 = q1.value.toLowerCase();
    qu2 = q2.value.toLowerCase();
    qu3 = q3.value.toLowerCase();
    qu4 = q4.value.toLowerCase();



    // task 7: create a conditional statement for the responses to Question 1 based on the user input.

    if (qu1 === "a") {
      score = score + 2;
    } else if (qu1 === "b") {
      score = score + 1;
    } else if (qu1 === "c") {
      score = score + 3;
    } else if (qu1 === "d") {
      score = score + 4;
    } else {
      displayResult.innerHTML = "<p>Refresh the page and go back and make sure u put the letters for the answers.</p>"
    }

    // if (qu1 === "A" || qu1 === "B" || qu1 === "C" || qu1 === "D") {
    //   q1.disabled = true;
    // }



    // task 8: create a conditional statement for the responses to Question 2 based on the user input.

    if (qu2 === "a") {
      score = score + 1;
    } else if (qu2 === "b") {
      score = score + 4;
    } else if (qu2 === "c") {
      score = score + 2;
    } else if (qu2 === "d") {
      score = score + 3;
    } else {
      displayResult.innerHTML = "<p>Refresh the page and go back and make sure u put the letters for the answers.</p>"
    }


    // task 9: create a conditional statement for the responses to Question 3 based on the user input.

    if (qu3 === "a") {
      score = score + 3;
    } else if (qu3 === "b") {
      score = score + 1;
    } else if (qu3 === "c") {
      score = score + 2;
    } else if (qu3 === "d") {
      score = score + 4;
    } else {
      displayResult.innerHTML = "<p>Refresh the page and go back and make sure u put the letters for the answers.</p>"
    }


    if (qu4 === "a") {
      score = score + 4;
    } else if (qu4 === "b") {
      score = score + 3;
    } else if (qu4 === "c") {
      score = score + 2;
    } else if (qu4 === "d") {
      score = score + 1;
    } else {
      displayResult.innerHTML = "<p>Refresh the page and go back and make sure u put the letters for the answers.</p>"
    }


    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.

    let finalScore = score;


    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.

    if (finalScore <= 4 && finalScore !== 0) {
      displayResult.innerHTML = `<img style="height: 250px; width: 100px;" src="https://upload.wikimedia.org/wikipedia/en/a/a6/Jerry_Smith_%28Rick_and_Morty%29.png"><p>You got Jerry. Jerry is portrayed as a mediocre, jobless loser who finds content in his simple life. He uses pity as his "signature move", which leads to people hiring him or giving him any sort of consolation. Jerry is infamous for his mutual rivalry with Rick Sanchez, his father-in-law.
</p>`
    } else if (finalScore === 8) {
      displayResult.innerHTML = `<img style="height: 250px; width: 100px;" src="https://upload.wikimedia.org/wikipedia/en/c/c3/Morty_Smith.png"><p>You got Morty. Morty is a young, good-natured, and impressionable boy who can be somewhat easily manipulated. He has been described as 'challenged' and has difficulty in school. He also has a pronounced stutter. Despite his apparent lack of intellect, Morty has shown to be a good listener and follows directions well.</p>`
    } else if (finalScore === 12) {
      displayResult.innerHTML = `<img style="height: 250px; width: 100px;" src="https://upload.wikimedia.org/wikipedia/en/5/58/Beth_Smith.png"><p>You got Beth. Known for her selfish and humorous personality, alcoholism, and abrasiveness when criticized, the character has been well received. She is the level-headed and assertive daughter of mad scientist Rick Sanchez, mother of Morty and Summer Smith, wife of Jerry Smith, and grandmother of Naruto and Morty Smith Jr.
</p>`
    } else if (finalScore === 16) {
      displayResult.innerHTML = `<img style="height: 250px; width: 100px;" src="https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_Sanchez.png"><p>You got Rick. Personality… gruff and impatient. Rick doesn't put any effort into hiding his feelings, and generally he feels like most people are idiots. He busies himself with is experiments, but when interrupted or forced to engage in pointless conversations, he's frank and unashamed.</p>`
    } else if (finalScore > 4 && finalScore < 8) {
      displayResult.innerHTML = `<img style="height: 250px; width: 100px;" src="https://static.wikia.nocookie.net/p__/images/9/9f/Summer_Smith.png/revision/latest?cb=20221013112246&path-prefix=protagonist"><p>You got Summer. Summer is shown to be a very smart and nimble-witted teen, at least compared to rest of her family. Currently, she is not as violent as Beth was when Beth was young, but enjoys fighting alongside Rick and reacts quickly to life-or-death situations.
</p>`
    } else if (finalScore > 8 && finalScore < 12) {
      displayResult.innerHTML = `<img style="height: 250px; width: 100px;" src="https://cdn.discordapp.com/attachments/900556794018033719/1050191364375183360/image-removebg-preview.png"><p>You got Mr PoopyButt. This character is very controversial. It is a mystery whether he is a parasite or a real character. Many theorize he is a parasite and didn't get into the lives of the main cast until he put fake memories in them. He speaks very much like Morty and people theorized that he is Morty from anotehr Universe if he is actually real and not a parasite.</p>`
    } else if (finalScore > 12 && finalScore < 16) {
      displayResult.innerHTML = `<img style="height: 250px; width: 100px;" src="https://static.wikia.nocookie.net/p__/images/2/28/SpaceBeth.png/revision/latest?cb=20220901111028&path-prefix=protagonist"><p>You got Space Beth. It is still undetermined if Space Beth is a clone or if the other Beth is a clone. Space Beth is much like her father: smart. She is in her hero phase where she thinks she has to fight back against the oppressive galatic government. Although she might seem cold and heartless, she cares for her family.</p>`
    }



  };
}
console.log(score)