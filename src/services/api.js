const callToApi = () => {
  // Llamamos al API
  return fetch(
  "https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json"
  )
  .then((response) => response.json())
  .then((dataFromApi) => {
    return dataFromApi.results;
  
  });
  };
  
  export default callToApi; 