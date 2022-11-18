import {TbPrompt} from 'react-icons/tb';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-10 px-2 bg-gray-500 flex flex-row justify-between align-items-center'>
      <TbPrompt size={30}/>
      <div className='mr-5 flex justify-center gap-3 align-items-center'>
        <Link to="/" className='text-decoration-none text-white'><span className='m-1 hover:text-gray-300'>Home</span></Link>
        <Link to="/" className='text-decoration-none text-white'><span className='m-1 hover:text-gray-300'>Contanct Us</span></Link>
        <a href="https://github.com/AliSohani2082/BlockLang" target="_blank" className='text-decoration-none text-white cursor-pointer'><span className='m-1 hover:text-gray-300'>Github</span></a>
      </div>
    </div>
  )
}

export default Header