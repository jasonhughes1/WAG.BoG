import { fetchLocationSuccess } from '../Actions/Actions';

export const handleSubmit = (liveUser, activePopup) => {
  if (!liveUser) {
    activePopup(true);
    return;
  }
};



export const locationDefaults = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition( position => {
      dispatch(fetchLocationSuccess(position.coords));
    }
    );
  };
};

export const defaultUserFormState = {
  compName: '',
  sport: '',
  players: '',
  competitiveness: 'Casual',
  date: '2017-11-01',
  time: '15:00',
  details: '',
  location: '',
  creator: '',
  activePlayers: null
};

export const mapDimensions = { height: '250px', width: '250px'};
export const defaultMapPlacement = { lat:39.7508006, lng:-104.9965947 };
