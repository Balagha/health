import {Link} from 'react-router-dom';
import logo from '../image/logo.gif';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="width 40%"
                    src={logo}/>
            </div>
            <h2 className="mt-0 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-bold text-Green hover:text-light">
                {linkName}
            </Link>
            </p>
        </div>
    )
}