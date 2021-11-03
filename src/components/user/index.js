import React, {useEffect, useState} from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import actions from '~s/actions';
import withLoader from "~ROOT/hocs/withLoader";
import User from './User.jsx';
import ErrorServer from '~c/errors/Server.jsx';

const UserContainer = props => {

  const dispatch = useDispatch();
  const selector = useSelector;
  const {login} = props.match.params;
  const {name, collections, likes, photos, followers, thumb} = selector(state => state.userReducer);
  const {showLoader, hideLoader, status: loaderStatus} = props.loader;
  const [error, setError] = useState(false);

  useEffect(() => {
    showLoader()
    dispatch(actions.userActions.load(login))
      .then(() => hideLoader())
      .catch(() => {
        setError(true);
        hideLoader();
      })
    return () => dispatch(actions.userActions.clear())
  }, []);

  if (error) return <ErrorServer text="Не удалось загрузить информацию о пользователе..."/>;

  const data = {
    thumb, 
    name,
    collections, 
    likes, 
    photos, 
    followers
  }

  return <User {...data} />
  
}

export default withRouter(withLoader(UserContainer));