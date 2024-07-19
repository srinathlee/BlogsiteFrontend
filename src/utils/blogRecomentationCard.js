import React from 'react'
import BlogRecomentationCardImg from "../assets/blog-recomendation-card-img.avif"
import userrecologo from "../assets/reco-user-logo.avif"

const BlogRecomentationCard = () => {
  return (
    <div>
      <div className='max-w-80 flex flex-col gap-4'>
        <img className='rounded-sm' src={BlogRecomentationCardImg}/>
        <div className=' flex flex-col gap-2'>
            <div className='flex flex-row gap-3'>
                <img className='w-6 h-6 rounded-3xl' src={userrecologo}/>
                <p className='text-sm'>Ravi_324</p>
            </div>
            <h1 className='text-xl font-bold'>Best Frontend Frameworks for Web Development in 2024</h1>
            <p className='text-lg text-[#6b6b6b]'>The front-end frameworks have revolutionized the approach of how web developers design </p>
        </div>
      </div>
    </div>
  )
}

export default BlogRecomentationCard
