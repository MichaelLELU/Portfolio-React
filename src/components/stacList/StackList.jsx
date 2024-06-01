
import { Swiper, SwiperSlide } from 'swiper/react';
import stack from '../../../public/data/stackLogos.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './stacList.scss'

// import required modules
import { EffectCards } from 'swiper/modules';

export default function StackList() {
  return (
    <>
    <h1 className='titleP'>Ma Stack Technique</h1>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
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