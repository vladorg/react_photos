import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import actions from '~s/actions';
import withLoader from "~ROOT/hocs/withLoader";
import Banner from './Banner.jsx';
import ErrorServer from '~c/errors/Server.jsx';

const BannerContainer = props => {  

  const {showLoader, hideLoader, status: loaderStatus} = props.loader;
  const dispatch = useDispatch();
  const selector = useSelector;
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);
  const images = selector(state => state.bannerReducer.images);
  let timeout;

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    }
  })

  useEffect(() => {
    showLoader('banner')
    dispatch(actions.bannerActions.load())
      .then(() => hideLoader('banner'))
      .catch(() => {
        setError(true);
        hideLoader('banner');
      })
    return () => {
      dispatch(actions.bannerActions.clear())
    }
  }, []);

  if (error) return <ErrorServer text="Не удалось загрузить баннер..."/>;
  if (counter < 9) timeout = setTimeout(() => setCounter(counter + 1), 5000);
  if (counter >= 9) setCounter(0);
  
  
  return <Banner image={images[counter]}/>
}

export default withRouter(withLoader(BannerContainer));