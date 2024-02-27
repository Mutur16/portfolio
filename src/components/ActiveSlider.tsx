import { useState, CSSProperties } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Mousewheel, Pagination } from 'swiper/modules'

import { RxArrowTopRight } from 'react-icons/rx'
import { ProjectType, emptyDialog, projects } from '../constants'
import DialogProject from './Dialog'
import { useTranslation } from 'react-i18next'

const ActiveSlider = () => {
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(emptyDialog)
  const handleOpen = () => setOpen(!open)

  const updateCurrentItem = function (item: ProjectType) {
    if (item.dialog) {
      setCurrentItem(item.dialog)
    }
    handleOpen()
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <Swiper
        style={
          {
            '--swiper-pagination-color': '#5D3A73',
            '--swiper-pagination-bullet-inactive-color': '#83738D',
            '--swiper-pagination-bullet-size': '14px',
          } as CSSProperties
        }
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          500: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1020: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
          1380: {
            slidesPerView: 3.25,
            spaceBetween: 15,
          },
        }}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[FreeMode, Mousewheel, Pagination]}
        className="max-w-[80%] md:max-w-[100%]"
      >
        {projects.map((item) => (
          <SwiperSlide key={item.name} onClick={() => updateCurrentItem(item)}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] md:h-[400px] md:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <div className="flex flex-row gap-2">
                  {item.icons.map((icon, index) => (
                    <img
                      key={index}
                      className="w-[32px] h-[32px]"
                      src={icon.img}
                      alt={t(icon.alt)}
                    />
                  ))}
                </div>
                <h3 className="text-xl lg:text-2xl">
                  {t(`project.${item.name}.title`)}
                </h3>
                <p className="lg:text-[18px]">
                  {t(`project.${item.name}.content`)}
                </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[20px] h-[20px] md:w-[35px] md:h-[35px] text-white group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <DialogProject open={open} handleOpen={handleOpen} data={currentItem} />
    </div>
  )
}

export default ActiveSlider
