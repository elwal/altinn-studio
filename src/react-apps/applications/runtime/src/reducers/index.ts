import {
  combineReducers,
  ReducersMapObject,
  Reducer,
} from 'redux';
import FormLayoutReducer, { ILayoutState } from '../features/form/FormLayout/reducer';
import FormDataReducer, { IFormDataState } from '../features/form/FormData/reducer';

export interface IReducers<T1, T2> {
  formLayout: T1;
  formData: T2;
}

export interface IRuntimeState extends IReducers<Reducer<ILayoutState>, Reducer<IFormDataState>>, ReducersMapObject {
}

const reducers: IRuntimeState = {
  formLayout: FormLayoutReducer,
  formData: FormDataReducer,
};

export default combineReducers(reducers);
