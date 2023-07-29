import React from "react";
import {MdDarkMode} from 'react-icons/md'
import {CiLight} from 'react-icons/ci'

function Header({ handleToggleDarkMode , darkMode}) {
  
  const handleToggleIcon = ((prevMode) => !prevMode)

  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="save" onClick={() => handleToggleDarkMode(handleToggleIcon)}>
        {darkMode ? <CiLight/> : <MdDarkMode/>}
      </button>
    </div>
  );
  }
export default Header;
