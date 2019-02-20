import { Action, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { store } from '../../store';
import * as formFillerActions from './actions/index';

export interface IFormFillerActionDispatchers extends ActionCreatorsMapObject {
  updateFormData: (
    componentID: string,
    formData: any,
    dataModelElement: IDataModelFieldElement,
    dataModelBinding?: string,
  ) => formFillerActions.IUpdateFormDataAction;
  updateFormDataFulfilled: (
    componentID: string,
    formData: any,
    dataModelBinding: string,
    validationErrors: any[],
  ) => formFillerActions.IUpdateFormDataActionFulfilled;
  updateFormDataRejected: (
    error: Error,
  ) => formFillerActions.IUpdateFormDataActionRejected;
  submitFormData: (url: string, apiMode?: string) => formFillerActions.ISubmitFormDataAction;
  submitFormDataFulfilled: (apiResult: any) => formFillerActions.ISubmitFormDataActionFulfilled;
  submitFormDataRejected: (error: Error) => formFillerActions.ISubmitFormDataActionRejected;
  fetchFormData: (url: string) => formFillerActions.IFetchFormDataAction;
  fetchFormDataFulfilled: (formData: any) => formFillerActions.IFetchFormDataActionFulfilled;
  fetchFormDataRejected: (error: Error) => formFillerActions.IFetchFormDataActionRejected;
  updateValidationErrors: (validationErrors: {}) => formFillerActions.IUpdateValidationErrors;
  resetFormData: (url: string) => formFillerActions.IResetFormDataAction;
  resetFormDataFulfilled: (formData: any) => formFillerActions.IResetFormDataActionFulfilled;
  completeAndSendInForm: (url: any) => formFillerActions.ICompleteAndSendInForm;
  completeAndSendInFormFulfilled: () => Action;
  completeAndSendInFormRejected: () => Action;
}

const actions: IFormFillerActionDispatchers = {
  updateFormData: formFillerActions.updateFormDataAction,
  updateFormDataFulfilled: formFillerActions.updateFormDataActionFulfilled,
  updateFormDataRejected: formFillerActions.updateFormDataActionRejected,
  submitFormData: formFillerActions.submitFormDataAction,
  submitFormDataFulfilled: formFillerActions.submitFormDataActionFulfilled,
  submitFormDataRejected: formFillerActions.submitFormDataActionRejected,
  fetchFormData: formFillerActions.fetchFormDataAction,
  fetchFormDataFulfilled: formFillerActions.fetchFormDataActionFulfilled,
  fetchFormDataRejected: formFillerActions.fetchFormDataActionRejected,
  updateValidationErrors: formFillerActions.updateValidationErrors,
  resetFormData: formFillerActions.resetFormDataAction,
  resetFormDataFulfilled: formFillerActions.resetFormDataFulfilled,
  completeAndSendInForm: formFillerActions.completeAndSendInForm,
  completeAndSendInFormFulfilled: formFillerActions.completeAndSendInFormFulfilled,
  completeAndSendInFormRejected: formFillerActions.completeAndSendInFormRejected,
};

const FormFillerActionDispatchers: IFormFillerActionDispatchers = bindActionCreators<
  any,
  IFormFillerActionDispatchers
>(actions, store.dispatch);
export default FormFillerActionDispatchers;
