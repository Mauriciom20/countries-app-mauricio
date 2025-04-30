import { countries } from './countries.js'

console.log(countries)

const container = document.querySelector('.country-card');

countries.map(({ country, capital,population }) => {
  const div = document.createElement('div');
  div.className = 'country';
  div.innerHTML = `<h2>${country}</h2><p>Capital: ${capital}</p><p>Population: ${population}</p>`;
  container.appendChild(div);
});