import { initialize, room, activities, site_configurations,reservation } from "./bucket";

export const getRooms = async () => {
  initialize({
    apikey: 'axfb9k1akx06fe2u',
  });
  return await room.getAll({ queryParams: { limit: 2, relation: true } });
}
export const getAllRooms = async () => {
  initialize({
    apikey: 'axfb9k1akx06fe2u',
  });
  return await room.getAll({queryParams:{relation:true}});
}
export const getActivities = async () => {
  initialize({
    apikey: 'axfb9k1akx06fe2u',
  });
  return activities.getAll()
}

export const getSiteConfigurations = async () => {
  initialize({
    apikey: 'axfb9k1akx06fe2u',
  });
  return await site_configurations.getAll()
}
export const makeReservation = async (value:any) => {
  initialize({
    apikey: 'axfb9k1akx06fe2u',
  });
  await reservation.insert(value)
}
