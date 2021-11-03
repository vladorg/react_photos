import React from "react";
import { useDispatch } from "react-redux";
import actions from '~s/actions';
import store from '~s/store';

let dependences = [];

const withLoader = BaseComponent => {
  return props => {
    const dispatch = useDispatch();
     
    const showLoader = (key) => {
      const status = store.getState().appReducer.loader;

      if (key) dependences.push(key);
      if (!status) dispatch(actions.appActions.showLoader());   
    };

    const hideLoader = (key) => {
      if (key) {
        dependences = dependences.filter(el => el !== key);
        if (!dependences.length) dispatch(actions.appActions.hideLoader());  
      } else {
        dispatch(actions.appActions.hideLoader());
      }
      
         
    };

    const loader = {
      showLoader,
      hideLoader
    }

    return <BaseComponent {...props} loader={loader}/>
  }
}

export default withLoader;