import weatherIcons from '../icons.json';

export const formatDate = (date) => {
  const options = {
    year: '2-digit', day: '2-digit', month: '2-digit', weekday: 'short',
  };
  return new Date(date).toLocaleDateString('de-DE', options);
};

// export const kelvinToCelsius = kelvin => (Number(kelvin) - 273.15).toFixed(1);


/*
return the most frequent item in an array of objects
where the key is the property being searched for
*/
export const getMostFrequentItem = (arr, key) => {
  const counts = {};
  let compare = 0;
  let mostFrequent = null;

  arr.forEach((item) => {
    const currentItem = item[key];
    if (counts[currentItem] === undefined) {
      counts[currentItem] = 1;
    } else {
      counts[currentItem] += 1;
    }

    if (counts[currentItem] > compare) {
      compare = counts[currentItem];
      mostFrequent = item;
    }
  });

  return mostFrequent;
};

export const mapToWeatherJson = (iconId) => {
  const prefix = 'wi wi-';
  const { label } = weatherIcons[iconId];
  let { icon } = weatherIcons[iconId];

  // If we are not in the ranges mentioned above, add a day/night prefix.
  if (!(iconId > 699 && iconId < 800) && !(iconId > 899 && iconId < 1000)) {
    icon = `day-${icon}`;
  }

  // Finally tack on the prefix.
  return {
    iconClass: prefix + icon,
    weatherLabel: label,
  };
};
