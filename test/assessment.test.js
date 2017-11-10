import Assessment from '../src/assessment'

// Feel free to rewrite this test suite. This is provided as guidance.

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}

function countInArray(array, what) {
  return array.filter(item => item == what).length;
}

describe('The Assessment', () => {
  var model = new Assessment
  model.buildQuestions()
  model.initializeResults()  

  it('should have 30 questions', () => {
    expect(model.questions).toHaveLength(30);
  });
  it('should not show the same answer twice', () => {
    var answers = []
    model.questions.forEach( ans => { answers.push(ans.answer1, ans.answer2)} )
    expect(hasDuplicates(answers)).toBe(false);
  });
  it('should match each dimension to the other dimensions exactly 2 times', () => {
    var tags = []
    model.questions.forEach( (ans, i) => { tags[i] = ans.tag1 + ans.tag2 })
    tags.forEach( (tagCombination) => { 
      expect(countInArray(tags, tagCombination)).toBe(2)
    })
  });
  it('should provide ipsative questions (two possible answers)', () => {
    model.questions.forEach(ans => { 
      expect(ans).toEqual(jasmine.objectContaining({
        answer1: expect.any(String),
        answer2: expect.any(String),
      }));
    })
  });
  describe('when completed', () => {
    it('should provide the results as an object', () => {
      expect(model.results).toEqual(jasmine.objectContaining({})); 
    });
    it('should represent the results based on 6 dimensions', () => {
      expect(model.results).toEqual(jasmine.objectContaining({
        Adaptive: expect.any(Number),
        Integrity: expect.any(Number),
        Collaborative: expect.any(Number),
        Result: expect.any(Number),
        Customer: expect.any(Number),
        Detail: expect.any(Number),
      })); 
    });
  });
});