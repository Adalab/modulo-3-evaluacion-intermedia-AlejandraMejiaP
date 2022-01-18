// Fichero src/services/api.js
const callToApi = () => {
    // Llamamos al API
    return fetch('https://swapi.dev/api/people/5') // Este 5 es el id de Leia Skywalker
      .then(response => response.json())
      .then(response => {
        // Cuando responde el API podemos limpiar los datos aquí
        const result = {
          name: response.name,
          };
        return result;
      });
  };
  
  export default callToApi;