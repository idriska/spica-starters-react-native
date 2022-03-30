import { initialize, place } from "./bucket";

export const getPlaces = async () => {
    initialize({
        apikey: 'axfb9k1akx06fe2u',
      });
      return place.getAll();
}