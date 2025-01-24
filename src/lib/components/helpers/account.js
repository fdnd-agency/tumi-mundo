import { writable } from 'svelte/store';

export const userState = writable({
  userId: 7,
  profileId: null
});
