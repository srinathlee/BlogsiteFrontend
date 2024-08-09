import React from 'react'
import BlogRecomentationCardImg from "../assets/blog-recomendation-card-img.avif"
import userrecologo from "../assets/reco-user-logo.avif"

const BlogRecomentationCard = ({each}) => {
  const{creatorName,image,content,title}=each;
  const para =
  each?.content.length > 120
    ? each.content.substring(0, 120) + "...."
    : each.content;
  return (
    <div>
      <div className='max-w-80 flex flex-col gap-4'>
        <img className='rounded-sm' src={image}/>
        <div className=' flex flex-col gap-2'>
            <div className='flex flex-row gap-3'>
                <img className='w-6 h-6 rounded-3xl' src={userrecologo}/>
                <p className='text-sm'>{creatorName}</p>
            </div>
            <h1 className='text-xl font-bold'>{title}</h1>
            <p className='text-lg text-[#6b6b6b]'>{para}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogRecomentationCard
