// To Do
// Api call
// Theme toggle between light and dark theme
// Search
// Filter
// Modal

async function getCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();

}

getCountries();
