import { KeyboardArrowUp, PersonOutlineOutlined } from '@mui/icons-material';
import React from 'react'
import './widget.scss';
const Widget = () => {
  return (
    <div className="widget">
        <div className="left">
            <div className="title">USERS</div>
            <div className="counter">21312</div>
            <div className="link">See all user</div>
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardArrowUp/>
                20 %
            </div>
            <PersonOutlineOutlined className='icon'/>
        </div>
    </div>
  )
}

export default Widget