import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Facilities.css";
export default function Facilities() {
    return (
        <>
            <div className=" p-3 bg-white sidebar-class-for-width facility">
                <a className="d-flex  align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                    <svg className="svg-bi me-2" width="30" height="24">
                        {/* <use xlink:href="#bootstrap"/> */}
                    </svg>
                    <span className="facilities">FACILITIES</span>
                </a>
                <ul className="list-unstyled ps-0 align listdiv">
                    <li className="lst"><NavLink to='/facilities/boys_hostel' className="inlst">Boys Hostel</NavLink></li>
                    <li className="lst"><NavLink to='/facilities/girls_hostel' className="inlst">Girls Hostel</NavLink></li>
                    <li className="lst"><NavLink to='/facilities/gymkhana' className="inlst">Gymkhana</NavLink></li>
                    <li className="lst"><NavLink to='/facilities/library' className="inlst">Library</NavLink></li>
                    <li className="lst"><NavLink to='/facilities/edsuc' className="inlst">EDSUC</NavLink></li>
                    {/* <li className="lst"><NavLink to='/facilities/boys_hostel'>मराठी भाषा अधिकारी</NavLink></li> */}
                </ul>
            </div>
        </>
    )
};