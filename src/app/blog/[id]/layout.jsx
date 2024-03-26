
import React from 'react';
import Link from "next/link";

 function LayoutBlog({ children }) {
  return (
    <div className='flex pt-24' style={{paddingTop: "10rem"}}>
        {children}
        <aside>
        <span>Navegacion</span>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Productos y servicios</Link></li>
            <li><Link href="/">Filiales</Link></li>
            <li><Link href="/">Publicaciones</Link></li>
            <li><Link href="/">Web Banking</Link></li>
            <li><Link href="/">Contacto</Link></li>
        </ul>
        </aside>
    </div>
  )
}
export default LayoutBlog; 

