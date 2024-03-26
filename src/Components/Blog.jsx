import Image from 'next/image';
import React from 'react';

import { Text,  } from './Utilities/myUtlities';

const Blog = ({
  imgPath,
  date,
  title,
  description
}) => {
  return (
      <figure className='bg-slate-100 w-4/5'>
        <Image src={imgPath} width="300" height="300" alt={title}/>
        <figcaption className='mt-4 p-4'>
          <span className='text-xs text-slate-500'>{date}</span>
          <h3 className="font-semibold">{title}</h3>
          <Text>{description}</Text>
        </figcaption>
      </figure>
  )
}

export default Blog