export const formatDate = (date) => {
  const options = {
    year: '2-digit', day: '2-digit', month: '2-digit', weekday: 'short',
  };
  return new Date(date).toLocaleDateString('de-DE', options);
};

export const kelvinToCelsius = kelvin => Math.floor(Number(kelvin) - 273.15);
