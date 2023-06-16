
import { getRandomInt } from '../utils/utils';
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';

const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const SENTENCES = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'];
const CITIES = ['Syktyvkar', 'Vorkuta', 'Inta', 'Ukhta', 'Pechora'];

dayjs.extend(dayjsRandom);

function generatePoints(amount) {
  const pointArray = new Array(amount);
  for(let i = 0; i < amount; i++) {
    pointArray[i] = generatePoint(i);
  }
  return pointArray;
}

function generatePoint(id) {
  const dates = generateDates();
  return {
    'base_price': getRandomInt(1, 1000),
    'date_from': dates[0],
    'date_to': dates[1],
    'destination': generateDestination(id),
    'id': id,
    'offers': generateOffers(5),
    'type': generateType(),
  };
}

function generateOffers(amount) {
  const offerArray = new Array(amount);
  for(let i = 0; i < amount; i++) {
    offerArray[i] = generateOffer(i);
  }
  return offerArray;
}

function generateOffer(id) {
  return {
    'id': id,
    'title': generateDescription(),
    'price': getRandomInt(1, 1500)
  };
}

function generateDestination(id) {
  return {
    'id': id,
    'description': generateDescription(),
    'name': generateCityName(),
    'pictures': [
      {
        'src': generateImage(),
        'description': generateDescription(),
      }
    ],
  };
}

function generateDates() {
  const dateFirst = dayjs.between('2020-06-10T11:00:00+01:00', '2020-06-10T19:00:00+01:00');
  const dateSecond = dayjs.between(dateFirst, '2020-06-10T19:00:00+01:00');
  return new Array(dateFirst, dateSecond);
}

function generateType() {
  return TYPES[getRandomInt(0, TYPES.length)];
}

function generateDescription() {
  const length = SENTENCES.length;
  const min = getRandomInt(0, length);
  let max = getRandomInt(0, length);
  while(max > min) {
    max = getRandomInt(0, length);
  }
  let result = '';
  for(let i = min; i <= max; i++) {
    result += `${SENTENCES[i]} `;
  }

  return result;
}

function generateImage() {
  return `http://picsum.photos/248/152?r=${getRandomInt(0, 10)}`;
}

function generateCityName() {
  return CITIES[getRandomInt(0, CITIES.length)];
}


export { generatePoints };
