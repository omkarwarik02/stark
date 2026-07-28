import { useEffect, useRef, useState } from "react";

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
const defaultOptions:MenuOption[] = [
      { value: 'opt1', label: 'Option 1' },
  { value: 'opt2', label: 'Option 2' },
  { value: 'opt3', label: 'Option 3' }
]


export default function DropdownMenu ({
    label,
    options = defaultOptions,
    className = '',
    value = null,
    handleChange,
    placeholder = 'Select and option',
}:DropdownProps){
const [isOpen, setIsOpen] = useState(false);
const [selected,setSelected] = useState<string | number | null>(value);
const dropdownRef = useRef<HTMLDivElement>(null)


const toggle = () => {
    setIsOpen(isOpen ? false : true)
}

const handleSelect = (option:MenuOption) =>{

setSelected(option.value)
setIsOpen(false)
handleChange?.(option.value)

}
useEffect(() => {

const handleClickOutside = (e:MouseEvent) => {
    if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node)){
        setIsOpen(false)
    }
}
document.addEventListener('mousedown', handleClickOutside)

return () => {
    document.removeEventListener('mousedown',handleClickOutside)
}
},[]) 
const selectedOption = options.find(opt => opt.value === selected)
return (
    <div ref={dropdownRef} className={`relative w-64 ${className}`}>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>

        <button
            onClick={toggle}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left text-sm hover:bg-gray-50"
        >
            {selectedOption?.label || placeholder}
            <span className={`float-right transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                ▼
            </span>

        </button>
        {isOpen && (
            <ul className="absolute top-full left-0 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-lg z-10">
                {options.map((option)=>(
                    <li key={option.value}>
                        <button
                            onClick={()=> handleSelect(option)}
                            className={`w-full px-3 py-2 text-left text-sm hover:bg-blue-100 ${selected === option.value ? 'bg-blue-50 font-medium' : '' }`}
                        >
                            {option.label}
                        </button>
                    </li>
                ))}
            </ul>
        )}
    </div>
)

}


   
