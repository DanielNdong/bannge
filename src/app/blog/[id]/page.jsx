"use client"

import { SmallSubtitle, Subtitle, Text } from '@/Components/Utilities/myUtlities';
import Image from 'next/image';
import React from 'react'
import { BLOG as listBlog } from '../../../../constants/content';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import MainBlog from "@/Components/MainBlog";

function BlogDetails({ params }) {

  // Recorremos los atributos del objeto que corresponde a los detalles del blog 
  const pathId = params.id;
  const blog = listBlog.filter(blog => {
    if(blog.id == pathId) {
      return blog;
    }
  })
    
  return (
      <div className='container m-auto'>
      {blog.map(
        (item, key) => (
        <div key={key} style={{paddingTop: "2rem"}}>
           <SmallSubtitle>BlogDetails</SmallSubtitle>
           <Text className="my-3">{item.date}</Text>
           <Image src={item.img} width="600" height="600" alt={item.title}/>
           <Subtitle className="mt-4 mb-8">{item.title}</Subtitle>
           <Text>{item.text}</Text>
        </div>
      )
     )}
     <section>
        <MainBlog />
      </section>
    </div>
  )
}

export default BlogDetails;