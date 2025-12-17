// import { Canvas } from '@react-three/fiber'
// import React from 'react'
// import "./style.css"
// import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
// import MacContainer from './MacContainer'

// const App = () => {
//   return (
//     <div className='w-full h-screen '>
//       <div className='absolute  flex-col items-center top-32 left-1/2 text-white -translate-x-1/2 font-helvatica_now '>
// <h3 className='text-7xl  tracking-tighter font-[700] '>
//   Macbook pro.
// </h3>
// <h5> Oh so Pro</h5>
// <p className='text-center w-3/4' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil rem harum tenetur porro!</p>
//       </div>
//       <Canvas camera={{fov:20 , position:[0, -10 , 220,]}} >
//   <OrbitControls />

// <Environment files={'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr'} />

// <ScrollControls>
// <MacContainer />
// </ScrollControls>





// </Canvas>
//     </div>

//   )
// }

// export default App
import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'
import Navbar from './Navbar'

const App = () => {
  return (
    <div className='w-full h-screen relative'>
      {/* Text Section */}
      <Navbar />
      <div className='absolute flex flex-col items-center top-32 left-1/2 text-white -translate-x-1/2 font-helvatica_now'>
        <h3 className='text-7xl tracking-tighter font-[700]'>
          MacBook Pro.
        </h3>
        <h5 className='text-xl mt-2'>Oh so Pro</h5>
        <p className='text-center w-3/4 mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil rem harum tenetur porro!
        </p>
      </div>

      {/* 3D Scene */}
      <Canvas camera={{ fov: 20, position: [0, -10, 220] }}>
        {/* Disable zoom & rotate so only scroll controls animation works */}
        <OrbitControls enableZoom={false} enableRotate={false} />

        {/* Environment lighting */}
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr" />

        {/* Scroll-based animation (2 virtual pages) */}
        <ScrollControls pages={2} damping={0.2}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
