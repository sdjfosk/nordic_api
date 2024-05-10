const inputElement = document.getElementById('input1');

function handleQuestionInit(customQuestionSettings, uiSettings, questionProps, surveyProps) {
  // todo: put your initialization code here
}

function handleSettingsReceived(customQuestionSettings, uiSettings) {
  // todo: put your rendering code here
  if (customQuestionSettings) {
    inputElement.value = customQuestionSettings.mySetting1;
  }
}

function handleInput() {
  const settings = {mySetting1: inputElement.value};
  const hasError = inputElement.value === '';

  // todo: call saveChanges to store updated settings
  customQuestion.saveChanges(settings, hasError);
}

customQuestion.onInit = handleQuestionInit;
customQuestion.onSettingsReceived = handleSettingsReceived;
inputElement.addEventListener('input', handleInput);
