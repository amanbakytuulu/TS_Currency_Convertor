import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from 'react-icons/md';

function Setting(props) {
    const {time,setChecked,checked}=props;

    return (
        <div className="setting">
            <div className="setting__header">
                <div></div>
                <h1 className="setting__title">SETTINGS </h1>
                <Link to='/'>Done</Link>
            </div>
            <div className="setting__params">
                <div className="setting__param mr-30">
                    <h3>Prefer Rounded Values</h3>
                    <input className="switch" id="switch1" type="checkbox" checked={checked} onChange={()=>setChecked(!checked)} />
                    <label className="switch-for" htmlFor="switch1"></label>
                </div>
                <div className="setting__param ">
                    <h3>Show Onboarding</h3>
                    <MdArrowForwardIos className="setting__arrow" />
                </div>
                <div className="setting__param ">
                    <h3>Follow on Twitter</h3>
                    <MdArrowForwardIos className="setting__arrow" />
                </div>
                <div className="setting__param ">
                    <h3>Rate Elk</h3>
                    <MdArrowForwardIos className="setting__arrow" />
                </div>
                <div className="setting__param ">
                    <h3>About Elk</h3>
                    <MdArrowForwardIos className="setting__arrow" />
                </div>
                <div className="time">
                    UPDATED: {new Date(time).toDateString()}
                </div>
            </div>
        </div>
    )
}

export default Setting