const callToApi = () => {
  // Llamamos al API
  return fetch(
  "https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json"
  )
  .then((response) => response.json())
  .then((dataFromApi) => {

    const cleanData = dataFromApi.results.map ((adalaber) =>
    {
      return {
        id: adalaber.id,
        name: adalaber.name,
        counselor: adalaber.counselor,
        speciality: adalaber.speciality,
        social_networks: adalaber.social_networks.map((rrss) => <span> {rrss.name} </span>)
      } } );
      return cleanData;
      
  });
  };
  
  export default callToApi; 