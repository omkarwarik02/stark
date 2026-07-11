interface FileDownloadButtonProps {
    href:string;
    download:string;
    label?:string;
    className?:string;
}


export default function FileDownloadButton ({href,download,label='Download File',className=''}:FileDownloadButtonProps){


    return (
        <div>
                <a href={href} download={download} className={`inline-block bg-black flex p-2 rounded-lg items-center cursor-pointer hover:opacity-90 transition-opacity ${className} `}>
                 <span className="text-sm text-white">{label}</span>
                </a>
            
        </div>
    )



}