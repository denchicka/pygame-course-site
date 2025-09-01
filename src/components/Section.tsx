import React from 'react'
export default function Section({title,children}:{title:string;children:React.ReactNode}){return(<section className='space-y-3'><h3 className='text-xl font-semibold mt-6'>{title}</h3><div className='prose max-w-none'>{children}</div></section>)}
