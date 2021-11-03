import React, {useEffect, useState} from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import actions from '~s/actions';
import withLoader from "~ROOT/hocs/withLoader";
import Card from './Card.jsx';
import ErrorServer from '~c/errors/Server.jsx';

const CardContainer = props => {

  const {id: photoId} = props.match.params;
  const dispatch = useDispatch();
  const selector = useSelector;
  const {imageUrl, author: {name, login}} = selector(state => state.photoCardReducer);
  const {showLoader, hideLoader, status: loaderStatus} = props.loader;
  const [error, setError] = useState(false);

  useEffect(() => {
    showLoader()
    dispatch(actions.photoCardActions.load(photoId))
      .then(() => hideLoader())
      .catch(() => {
        setError(true);
        hideLoader();
      })
    return () => dispatch(actions.photoCardActions.clear());
  }, []);

  if (error) return <ErrorServer text="Не удалось загрузить информацию о картинке..."/>;

  const data = {
    back: props.history.goBack,
    image: imageUrl,
    login,
    name
  }

  return <Card {...data} />
}

export default withRouter(withLoader(CardContainer));