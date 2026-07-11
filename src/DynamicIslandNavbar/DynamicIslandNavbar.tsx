import { useState } from 'react'


//
type NavLink = {
    label: string
    href:string
}

type DynamicIslandNavbarProps = {
    brand?:string
    links?:NavLink[]
    ctaHref?:string
    ctaLabel?:React.ReactNode
    className?:string
}


const defaultLinks:NavLink[] = [
    {label:"Home",href:'#home'},
     { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]



export default function DynamicIslandNavbar({
    brand = 'Brand',
    links = defaultLinks,
    ctaHref = '#',
    ctaLabel = <>&lt;/&gt;</>,
     className = '',
}:DynamicIslandNavbarProps){
    
const [expanded, setExpanded] = useState(false)





    
    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
            <nav 
            onMouseEnter={()=> setExpanded(true)}
            onMouseLeave={()=> setExpanded(false)}
            className={`flex items-center  rounded-full bg-black/90 px-5 py-3 text-white backdrop-blur-md transition-all duration-500 ease-in-out ${expanded ? 'px-10 gap-8' : 'px-5 gap-6'} ${className}`}>
                <span className='text-sm font-semibold tracking-tight'>{brand}</span>

                <div className={`flex items-center  text-sm text-white/80 transition-all duration-500 ease-in-out ${expanded ? 'gap-8' : 'gap-5'}`}>
                    {links.map((link)=>(
                        <a key={link.href} href={link.href} className='transition-colors hover:text-white'>{link.label}</a>
                    ))}
                </div>
                 <a href={ctaHref} target='_blank' rel="noopener noreferrer" className='text-sm text-white/80 transition-colors hover:text-white'>
                {ctaLabel}
            </a>

            </nav>

        </div>
    )
}