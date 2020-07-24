import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

// en el componente Home es necesario traer los elementos que se tienen como props
const Home = ({ myList, trends, originals}) => {
  return (
    <>
      <Search />
      { myList.length > 0 && 
      <Categories title="Mi Lista">
        <Carousel>
          {myList.map((item) =>
            <CarouselItem
              key={item.id}
              {...item}
              isList
             />)}
        </Carousel>
      </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
}
// traer del estado los elementos que necesito 
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
//el export se adiciona el connect para poder usar los estados  desde el home
export default connect(mapStateToProps, null)(Home);
