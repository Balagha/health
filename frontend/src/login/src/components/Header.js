import {Link} from 'react-router-dom';
import Logo from '../image/logo.gif'
export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-5">
            <div className="flex justify-center -pt-10 ">
                <img 
                    alt=""
                    className=" w-50%"
                    src= {Logo} />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-sky-600 hover:text-sky-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}