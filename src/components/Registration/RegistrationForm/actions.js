
import * as ACTIONS from '../../constants';

export const  registerUserAction = (values) => {
    return {
		type: ACTIONS.REGISTER_CRYODEX,
		payload: values
    }
};

export function updateCountries(payload) {
  return { type: ACTIONS.CRYODEX_UPDATE_COUNTRIES, payload };
}

export function updateCities(payload) {
  return { type: ACTIONS.CRYODEX_UPDATE_CITIES, payload };
}

export const getCitiesAction = () => {
    return {
        type: ACTIONS.CRYODEX_UPDATE_CITIES
    }
};

export const getCountriesAction = () => {
    return {
        type: ACTIONS.CRYODEX_GET_COUNTRIES
    }
};

/*
export const getLocationsAction = (payload) => {
    return {
        type: ACTIONS.CRYODEX_GET_LOCATION,
        payload
    }
};
*/

