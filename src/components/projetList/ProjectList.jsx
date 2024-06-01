import ProjectCard from "../projetCard/ProjectCard";
import projects from '/public/data/projects.json';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './pListeStyle.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function ProjectList() {
    
  return (
      <>
      <h1 className="titleP">Projets: </h1>
          <Swiper
                   slidesPerView={1}
                   spaceBetween={10}
                   breakpoints={{
                     650: {
                       slidesPerView: 1,
                       spaceBetween: 20,
                     },
                     768: {
                       slidesPerView: 2,
                       spaceBetween: 40,
                     },
                     1024: {
                       slidesPerView: 3,
                       spaceBetween: 50,
                     },}}
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
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiperProject" id="projectList" >
              <div>          
          {projects && projects.map((pe )=> (
              <SwiperSlide key={pe.id}><ProjectCard projet={pe}/></SwiperSlide>
          ))}
        </div>
    </Swiper>
     </>
    )
  }
