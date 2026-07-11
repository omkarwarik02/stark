import { ReactNode } from 'react'

export type NavLink = {
  label: string
  href: string
}

export type DynamicIslandNavbarProps = {
  brand?: string
  links?: NavLink[]
  ctaHref?: string
  ctaLabel?: ReactNode
  className?: string
}

export declare function DynamicIslandNavbar(props: DynamicIslandNavbarProps): ReactNode

export type FAQItem = {
  question: string
  answer: ReactNode
}

export type FAQAccordionProps = {
  items?: FAQItem[]
  className?: string
}

export declare function FAQAccordion(props: FAQAccordionProps): ReactNode

interface MenuOption {
    value:string | number;
    label: string;
}

interface DropdownProps {
    label:string;
    className?:string;
    value?: string | number | null;
    handleChange?:(value:string | number)=>void
    placeholder?:string
    options?:MenuOption[]
}
export declare function DropdownMenu(props:DropdownProps):ReactNode

interface FileDownloadButtonProps {
    href:string;
    download:string;
    label?:string;
    className?:string;
}
export declare function FileDownloadButton(props:FileDownloadButtonProps):ReactNode