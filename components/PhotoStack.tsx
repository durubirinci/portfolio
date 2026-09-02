'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'

const photos = [
  { src: '/images/duru-pseg.jpg', alt: 'Duru volunteering with PSEG' },
  { src: '/images/duru-fiserv.jpg', alt: 'Duru at her Fiserv internship' },
  { src: '/images/duru-selfie.jpg', alt: 'Duru Birinci' },
]

// resting transform for each position in the stack, back to front
const positions = [
  { rotate: -6, x: 12, y: 16 },
  { rotate: 6, x: -12, y: 8 },
  { rotate: -2, x: 0, y: 0 },
]

const SWIPE_THRESHOLD = 90
const SPRING = { type: 'spring' as const, stiffness: 350, damping: 30 }

export default function PhotoStack() {
  const [order, setOrder] = useState(photos.map((_, i) => i))

  function sendToBack() {
    setOrder((o) => [o[o.length - 1], ...o.slice(0, o.length - 1)])
  }

  return (
    <div className="relative h-64 w-56 sm:h-72 sm:w-64">
      {order.map((photoIndex, stackPos) => (
        <Card
          key={photoIndex}
          photo={photos[photoIndex]}
          target={positions[stackPos]}
          isFront={stackPos === order.length - 1}
          onSwiped={sendToBack}
        />
      ))}
    </div>
  )
}

function Card({
  photo,
  target,
  isFront,
  onSwiped,
}: {
  photo: { src: string; alt: string }
  target: { rotate: number; x: number; y: number }
  isFront: boolean
  onSwiped: () => void
}) {
  const controls = useAnimation()
  const x = useMotionValue(target.x)
  const rotate = useMotionValue(target.rotate)

  useEffect(() => {
    controls.start({
      x: target.x,
      y: target.y,
      rotate: target.rotate,
      opacity: 1,
      transition: SPRING,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.x, target.y, target.rotate])

  return (
    <motion.img
      src={photo.src}
      alt={photo.alt}
      drag={isFront ? 'x' : false}
      dragMomentum={false}
      style={{ x, y: target.y, rotate }}
      animate={controls}
      onDrag={(_, info) => {
        rotate.set(target.rotate + info.offset.x / 10)
      }}
      onDragEnd={(_, info) => {
        const offset = info.offset.x
        if (Math.abs(offset) > SWIPE_THRESHOLD || Math.abs(info.velocity.x) > 500) {
          const direction = offset > 0 ? 1 : -1
          controls
            .start({
              x: direction * 600,
              rotate: target.rotate + direction * 25,
              opacity: 0,
              transition: { duration: 0.25, ease: 'easeIn' },
            })
            .then(onSwiped)
        } else {
          controls.start({
            x: target.x,
            y: target.y,
            rotate: target.rotate,
            transition: SPRING,
          })
        }
      }}
      className={`absolute inset-0 h-full w-full touch-none select-none rounded-lg border-[6px] border-white object-cover shadow-lg ${
        isFront ? 'cursor-grab active:cursor-grabbing' : ''
      }`}
    />
  )
}
