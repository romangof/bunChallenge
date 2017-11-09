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
    Dimensions.forEach( tag, i => {
      j = 1
      while (tag.answer.length != 0) {
        [1,2].forEach( () => {
          this.questions.push({ 
            'tag1': tag.name,  
            'answer1': tag.answer[length - 1],
            'tag2': Dimensions[i + j].name,
            'answer2': Dimensions[i + j].answers[length - 1]
          })
          tag.answers.pop()
          Dimensions[i + j].answers.pop()
        })
       
        // this.questions.push({ 
        //   'tag1': tag.name,  
        //   'answer1': tag.answer[length - 1],
        //   'tag2': Dimensions[i + j].name,
        //   'answer2': Dimensions[i + j].answers[length - 1]
        // })
        // tag.answers.pop()
        // Dimensions[i + j].answers.pop()
       
        j++
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
