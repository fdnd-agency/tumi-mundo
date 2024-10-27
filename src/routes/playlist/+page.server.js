// src/routes/playlist/+page.server.js
import fetchJson from '$lib/fetch-json'; // Zorg ervoor dat dit pad klopt

// export async function load() {
//   const url = 'https://fdnd.directus.app/items/person/?filter={"id":25}'
  
//     try {
//       const response = await fetch(url);
//       const persons = await response.json();
  
//       // Controleer of de API correct antwoordt
//       console.log(persons, 'personen na extractie');
  
//       return {
//         persons: persons.data // Zorg ervoor dat je de "data" array retourneert
//       };
//     } catch (error) {
//       console.error('Error fetching persons:', error);
//       return {
//         persons: [] // Geef een lege array terug bij fout om crash te vermijden
//       };
//     }
//   }
  
// export async function load() {
//   const url = 'https://fdnd-agency.directus.app/items/tm24_story';

//   try {
//     // Data ophalen via het Directus API endpoint
//     const response = await fetch(url);
//     const stories = await response.json();

//     // Controleer of de API correct antwoordt en log de data
//     console.log(stories, 'stories from Directus');

//     // Data teruggeven aan je Svelte pagina
//     return {
//       stories: stories.data // Return de "data" array
//     };
//   } catch (error) {
//     console.error('Error fetching stories:', error);
//     return {
//       stories: [] // Geef een lege array terug als er een fout optreedt
//     };
//   }
// }

export async function load() {
    const url = 'https://fdnd-agency.directus.app/items/tm24_story';
  
    try {
      const response = await fetch(url);
      const stories = await response.json();
  
      // Eerste story ophalen
      const firstStory = stories.data[0];
      const secondStory = stories.data[1];
  
      return {
        firstStory, 
        secondStory
      };
    } catch (error) {
      console.error('Error fetching stories:', error);
      return {
        firstStory: null,
        secondStory: null
      };
    }
  }
  
