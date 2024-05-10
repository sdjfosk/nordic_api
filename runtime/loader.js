(function () {
  Confirmit.pageView.registerCustomQuestion('7194d7b9-6cab-4aed-a002-37640e6c00c3', render);

  function render(question, customQuestionSettings, questionViewSettings) {
    // TODO: put your code here
    // client api docs: https://confirmit.github.io/ResponsiveSurveyRenderingV2/index.html
    const container = document.getElementById(question.id);
    const div = document.createElement('div');
    div.innerText = 'hello world';
    container.appendChild(div);


    // create default question view to preserve original question behavior
    // ONLY applicable when default rendering is enabled for the custom question
    const viewFactory = Confirmit.pageView.questionViewFactory;
    const defaultView = viewFactory.create(question);
    // return the view instance so it can be cleaned up properly
    return defaultView;
  }
})();
