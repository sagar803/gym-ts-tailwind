import { motion } from 'framer-motion'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import HText from '@/shared/HText'
import { Swiper, SwiperSlide } from 'swiper/react';
import { SelectedPage, ClassType } from '@/shared/types'
import Class from './Class'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const classes: Array<ClassType> = [
    {
      name: "Weight Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image1,
    },
    {
      name: "Yoga Classes",
      image: image2,
    },
    {
      name: "Ab Core Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image3,
    },
    {
      name: "Adventure Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image4,
    },
    {
      name: "Fitness Classes",
      image: image5,
    },
    {
      name: "Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image6,
    },
];

const OurClasses = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1080px)")
  return (
    <section id='ourclasses' className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className='mx-auto w-5/6'
                initial='hidden'
                whileInView='visible'
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0}
                }}
            >
                <div className='md:w-3/5'>
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est atque beatae culpa harum quidem eius consequuntur deleniti reprehenderit! Praesentium ratione repellat dicta nulla, ad quia blanditiis. Nobis, a minima, officia explicabo excepturi accusantium natus animi corrupti beatae, voluptatem incidunt sint dolore unde soluta asperiores accusamus mollitia impedit itaque dolor rem.</p>
                </div>
            </motion.div>
            <div className="mt-10 h-[auto] w-[90%] mx-auto overflow-x-auto overflow-y-hidden">
                <Swiper
                    direction='horizontal'
                    slidesPerView={isAboveMediumScreens ? 3 : 1}

                    autoplay={{
                        pauseOnMouseEnter: true,
                        reverseDirection: true,
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    {classes.map((item: ClassType, index) => (
                        <SwiperSlide>
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses
