import { useState } from "react";
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux' 

const TabList = () => {
  // const dispatch = useDispatch();
  const files = useSelector(state => state.directory.files);
  const handleCloseTab = (e) => {
    e.preventDefault();

  }

  return (
    <div className="flex flex-row justify-start align-items-center w-full">
      {files.map((item, i) => (
        <Link to={item.to} key={i}>
          <div className="h-full px-1 flex justify-between align-items-center border min-w-{100px}">
            <span className="truncate mx-1 border">{item.label}</span>
            <button type="button" className="border" onClick={handleCloseTab}>
              <IoIosCloseCircleOutline size={23} />
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TabList;
