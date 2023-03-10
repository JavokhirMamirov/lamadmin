import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material';
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./featured.scss";
const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className='title'>Total Revenue</h1>
            <MoreVert fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text="70%" strokeWidth={5}/>
            </div>
            <div className="title">Total sales mode today</div>
            <div className="amount">$420</div>
            <p className="desc">Previous tansaction processing.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">
                        Target
                    </div>
                    <div className="itemResult negative">
                        <KeyboardArrowDown fontSize='small'/>
                        <div className="resultAmount">
                            $12.4k
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">
                        Last Week
                    </div>
                    <div className="itemResult positive">
                        <KeyboardArrowUp fontSize='small'/>
                        <div className="resultAmount">
                            $12.4k
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">
                        Last Month
                    </div>
                    <div className="itemResult positive">
                        <KeyboardArrowUp fontSize='small'/>
                        <div className="resultAmount">
                            $12.4k
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Featured