'use client'

interface BackdropProps {
  view: boolean
  click: () => void
}

const Backdrop = ({ view, click }: BackdropProps) => {
  return (
    <>
      {view && (
        <div
          className='fixed top-0 left-0 z-100 w-full h-screen bg-[#000000B3] transition-all duration-600 ease-[cubic-bezier(0.86,0,0.07,1)]'
          onClick={click}
        />
      )}
    </>
  )
}

export default Backdrop
