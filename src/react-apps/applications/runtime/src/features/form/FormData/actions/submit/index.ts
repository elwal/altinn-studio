import { Action } from 'redux';
import * as actionTypes from '../types';

export interface ISumbitDataAction extends Action {
  url: string;
}

export function submitFormData(url: string): ISumbitDataAction {
  return {
    type: actionTypes.SUBMIT_FORM_DATA,
    url,
  };
}

export function submitFormDataFulfilled(): Action {
  return {
    type: actionTypes.SUBMIT_FORM_DATA_FULFILLED,
  };
}

export interface ISubmitFormDataRejected extends Action {
  error: Error;
}

export function submitFormDataRejected(error: Error): ISubmitFormDataRejected {
  return {
    type: actionTypes.SUBMIT_FORM_DATA_REJECTED,
    error,
  };
}