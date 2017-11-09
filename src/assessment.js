import Dimensions from './dimensions';

// function randomize(max) {
//   return Math.floor( Math.random() * max )
// }

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
    Dimensions.forEach( tag => {
      i = 0
      while (tag.answer.length != 0) {
        this.questions.push({ 
          'tag1': tag.name,  
          'answer1': tag.answer,
          'tag2': Dimensions[i+1].name,
          'answer2': Dimensions[i++].answers[0]
        })
      }



      // tag.answers.forEach( ans => {
      //   console.log(ans)
      //   ans
      //   this.questions.push({ 
      //     'tag1':tag.name,  
      //     'answer1':tag.answer,
      //     'tag2': Dimensions[i+1]
      //   })
      // })


    })
  }
}

export default Assessment;
