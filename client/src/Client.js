/* eslint-disable no-undef */
function submitSurvey(surveyResults, cb) {
  return fetch(`api/surveys`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(surveyResults)
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function getUserSurveyResults(id, cb) {
  return fetch(`api/users/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { submitSurvey, getUserSurveyResults };
export default Client;
