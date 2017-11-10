import Dimensions from './dimensions';

class Assessment {
  constructor() {
    this.questions = []
    this.results = {}
  }
  
  initializeResults() {
    Dimensions.forEach( tag => {
      this.results[tag.name] = 0
    })
  }
  
  buildQuestions() {
    Dimensions.forEach( (tag, i) => {
      var j = 1
      while (tag.answers.length != 0) {
        [1,2].forEach( () => {
          this.questions.push({ 
            'tag1': tag.name,  
            'answer1': tag.answers[tag.answers.length - 1],
            'tag2': Dimensions[i + j].name,
            'answer2': Dimensions[i + j].answers[Dimensions[i + j].answers.length - 1]
          })
          tag.answers.pop()
          Dimensions[i + j].answers.pop()
        })

        j++
      }
    })
  }

  getQuestions() {
    return shuffle(this.questions)
  }

}

export default Assessment;


// Knuth-Shuffle (https://git.daplie.com/Daplie/knuth-shuffle)
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}