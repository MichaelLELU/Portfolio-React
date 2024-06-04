
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Parallax } from 'swiper/modules';
import stack from '../../../public/data/stackLogos.json';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './stacList.scss'


import { EffectCards } from 'swiper/modules';

export default function StackList() {
  return (
    <>
    <h1 className='titleP'>Ma Stack Technique:</h1>
      <Swiper
                style={{
                  '--swiper-navigation-color': 'rgb(123, 61, 123)',
                  '--swiper-pagination-color': 'rgb(123, 61, 123)',
                }}
                speed={600}
                parallax={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Navigation,EffectCards]}
        effect={'cards'}
        grabCursor={true}
        id="mySwiperStack"
      >
        {stack.map ((s) => (
            <div key={s.id}>
        <SwiperSlide id='swiperStack'>
            <img src={s.logo} alt={s.name} className='imgStack'/>
            <h2>{s.name}</h2>
        </SwiperSlide>
        </div>))}
      </Swiper>
    </>
  );
}