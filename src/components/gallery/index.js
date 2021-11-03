import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import withLoader from "~ROOT/hocs/withLoader";
import actions from '~s/actions';
import Gallery from './Gallery.jsx';
import ErrorServer from '~c/errors/Server.jsx';

const GalleryContainer = props => {

  // init
  const [limit, setLimit] = useState(20);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector;
  const {images, tag} = selector(state => state.gridReducer);
  const {showLoader, hideLoader, status: loaderStatus} = props.loader;
  const step = 4;

  useEffect(() => {
    showLoader('gallery');
    dispatch(actions.gridActions.search(tag, limit))
      .then(() => hideLoader('gallery'))
      .catch(() => {
        setError(true);
        hideLoader('gallery');
      })
  }, [tag, limit]);

  if (error) return <ErrorServer text="Не удалось загрузить галерею..."/>;

  const data = {
    limit,
    step,
    images,
    setLimit
  }
  
  return <Gallery {...data} />
}


export default withLoader(GalleryContainer);