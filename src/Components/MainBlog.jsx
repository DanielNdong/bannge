"use client"

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import Blog from './Blog';
import { BLOG as listBlog } from '../../constants/content';

function MainBlog() {
  const router = useRouter();
  return <>
      <ul className='flex gap-3 container pt-0 px-0'>
    { listBlog.map(
        (item, id) => (
              <li  key={id} onClick={() => {
                router.push(`/blog/${item.id}`)
              }}>
                <Blog 
                 imgPath={item.img}
                 date={item.date}
                 title={item.title}
                 description={item.description}
                />
              </li>
        ) 
        )
      }
      </ul>
  </>
}

export default MainBlog;