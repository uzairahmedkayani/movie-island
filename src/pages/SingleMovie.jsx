import React from 'react'
import NavBar from '../components/NavBar'

export default function SingleMovie() {
  return (
    <>
      <NavBar />
      <h3 className=" px-[200px] mb-5 text-3xl">Movie Trailer</h3>
        <div className='px-[200px]'>
            <iframe width="1500" height="520" src="https://www.youtube.com/embed/TEHWDA_6e3M?si=x4cHgh-ex8FgvHtb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </>
  )
}
