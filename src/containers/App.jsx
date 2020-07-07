import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
  const [ videos, setVideos ] = useState(
    {
      'mylist':[],
      'trends':[],
      'originals':[],
    },
  );

  useEffect(() => {
    fetch('http://127.0.0.1:3001/initalState')
      .then((response) =>response.json())
      .then((data) => setVideos(data));
  },[]);
  console.log(videos);

  return (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)}

        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          {videos.originals.map((item) => <CarouselItem key={item.id} {...item} />)}

          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />

    </div>

  );
};

export default App;
