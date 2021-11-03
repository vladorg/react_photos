import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import actions from '~s/actions';
import Header from './Header.jsx';

const HeaderContainer = props => {

  const dispatch = useDispatch();
  const searchPhotos = (e, tag) => {
    e.preventDefault();
    dispatch(actions.gridActions.setTag(tag))
      .then(() => {
        const gallery = document.querySelector('.gallery-section');

        if (gallery) gallery.scrollIntoView({block: "start", behavior: "smooth"});        
      })
  }

  const categories = [
    {
      name: 'All',
      tag: 'latest'
    },
    {
      name: 'Animals',
      tag: 'Animals'
    },
    {
      name: 'Films',
      tag: 'Films'
    },
    {
      name: 'Food&Drink',
      tag: 'Food&Drink'
    },
    {
      name: 'Nature',
      tag: 'Nature'
    },
    {
      name: 'Sport',
      tag: 'Sport'
    },
    {
      name: 'Health',
      tag: 'Health'
    },
    {
      name: 'IT',
      tag: 'IT'
    },
  ];

  const data = {
    categories,
    search: searchPhotos
  }

  return <Header {...data} />
}

export default HeaderContainer;