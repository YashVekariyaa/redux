import axios from 'axios';
import { toast } from 'react-toastify';
// import { BASE_URL } from '../../config';
import * as actionTypes from './ActionTypes';



export const create = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.JOIN_TEAM_INIT
    });

    await axios
      .post(`/api/`, payload, {})
      .then((res) => {
        if (res.data && res.status == '200') {
          dispatch({
            type: actionTypes.JOIN_TEAM_SUCCESS,
            payload: res.data
          });
          // window.location.replace(`${window.location.origin}`);
        }
      })
      .catch((error) => {
        if (error.response.status == '401') {
          localStorage.clear();
          window.location.replace(window.location.origin);
        }
        dispatch({
          type: actionTypes.JOIN_TEAM_FAIL,
          payload: error.response.data.message
        });
        toast.error(error.response.data.message, { autoClose: 1500 });
      });
  };
};

export const get = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.All_AGENCY_INIT
    });
    const token = localStorage.getItem('authtoken');
    await axios
      .get(
        `/api`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
        payload,
        {}
      )
      .then((res) => {
        if (res.data && res.status == '200') {
          dispatch({
            type: actionTypes.All_AGENCY_SUCCESS,
            payload: res.data
          });
        }
      })
      .catch((err) => {
        if (err?.response?.status == '401') {
          localStorage.clear();
          window.location.replace(window.location.origin);
        }
        console.log('agencuy errr +++', err);
        dispatch({
          type: actionTypes.All_AGENCY_FAIL,
          payload: 'Something went wrong!'
        });
        toast.error('Something went wrong!', { autoClose: 1500 });
      });
  };
};