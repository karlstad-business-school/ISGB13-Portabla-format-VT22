/**
 * Makes a request to https://restcountries.com/v3.1/name/{query} and displays a table with the results.
 * @param {string} query The user’s search query
 * @param {HTMLElement} container The <tbody> element that the result will be printed to
 */
function search(query, container) {
  // TODO: Rewrite to match the specification
  window.fetch('https://restcountries.com/v3.1/name/sweden')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data);
    });
}
