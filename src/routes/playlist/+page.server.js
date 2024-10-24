// src/routes/playlist/+page.server.js
import fetchJson from '$lib/fetch-json'; // Zorg ervoor dat dit pad klopt

export async function load() {
  const url = 'https://fdnd.directus.app/items/person/?filter={"id":25}'
  
    try {
      const response = await fetch(url);
      const persons = await response.json();
  
      // Controleer of de API correct antwoordt
      console.log(persons, 'personen na extractie');
  
      return {
        persons: persons.data // Zorg ervoor dat je de "data" array retourneert
      };
    } catch (error) {
      console.error('Error fetching persons:', error);
      return {
        persons: [] // Geef een lege array terug bij fout om crash te vermijden
      };
    }
  }
  

