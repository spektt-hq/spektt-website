import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouterState } from '@tanstack/react-router'

type Direction = 'top' | 'bottom' | 'left' | 'right'

const getRandomDirection = (): Direction => {
  const directions: Direction[] = ['top', 'bottom', 'left', 'right']
  return directions[Math.floor(Math.random() * directions.length)]
}

const getAnimationProps = (direction: Direction) => {
  const isVertical = direction === 'top' || direction === 'bottom'
  return {
    initial: isVertical ? { scaleY: 1 } : { scaleX: 1 },
    animate: isVertical ? { scaleY: 0 } : { scaleX: 0 },
    style: { transformOrigin: direction },
  }
}

// Ported from the old Next.js `[locale]/template.tsx`. Next re-mounted `template.tsx`
// on every navigation; here we key off the pathname so the fade + wipe replay on each
// route change.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const [direction, setDirection] = useState<Direction>('top')

  useEffect(() => {
    setDirection(getRandomDirection())
  }, [pathname])

  const animationProps = getAnimationProps(direction)

  return (
    <div key={pathname}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
      >
        {children}
      </motion.div>

      <motion.div
        className='slide-in'
        initial={animationProps.initial}
        animate={animationProps.animate}
        style={animationProps.style}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
