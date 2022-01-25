import React from "react";
import "./Edsuc.css";
import Img1 from "./Img1.png";
import Img2 from "./Img2.png";
import Img3 from "./Img3.png";
import Img4 from "./Img4.png";
import Img5 from "./Img5.png";
import Img6 from "./Img6.png";
import Img7 from "./Img7.png";
import Img8 from "./Img8.png";
import { NavLink } from 'react-router-dom';
export default function Edsuc() {
    return (
        <>
            <div className="vernav">
                <div className=" p-3 bg-white sidebar-class-for-width facility">
                    <a className="d-flex  align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                        <svg className="svg-bi me-2" width="30" height="24">
                            {/* <use xlink:href="#bootstrap"/> */}
                        </svg>
                        <span className=" facilities">FACILITIES</span>
                    </a>
                    <ul className="list-unstyled ps-0 align">
                        <li className="lst"><NavLink to='/facilities/boys_hostel' className="inlst">Boys Hostel</NavLink></li>
                        <li className="lst"><NavLink to='/facilities/girls_hostel' className="inlst">Girls Hostel</NavLink></li>
                        <li className="lst"><NavLink to='/facilities/gymkhana' className="inlst">Gymkhana</NavLink></li>
                        <li className="lst"><NavLink to='/facilities/library' className="inlst">Library</NavLink></li>
                        <li className="lst"><NavLink to='/facilities/edsuc' className="inlst">EDSUC</NavLink></li>
                        {/* <li className="lst"><NavLink to='/facilities/boys_hostel'>मराठी भाषा अधिकारी</NavLink></li> */}
                    </ul>
                </div>
                <div className="edsuc">
                    <p className="edsuc_title">EDSUC</p>
                    <p className="edsuc_subtitle">Entrepreneurship Development and Start Up Centre (EDSUC)</p>
                    <p>Entrepreneurship Development and Start Up Centre (EDSUC) is a non-profit student’s organization dedicated
                        for promoting and building the spirit of entrepreneurship among students coming throughout Maharashtra.
                        It is established in 2018 under the aegis of Innovation, Incubation and Entrepreneurship Development cell
                        of “Government College of Engineering and Research, Avasari (khurd)”. The geographical location of the
                        Institute i.e. rural place lacks the local employment opportunities because of underdeveloped industrial sector.
                        This compiles force the employable graduates to migrate to the urban area for hunting the job opportunities
                        and increasing the burden/pressure on the facilities. The ultimate solution to reduce the burden is to provide
                        the opportunities by developing their skill and transforming them self employable and job creators.
                    </p>
                    <p className="vision">Vision</p>
                    <p>To create environment of entrepreneurship and start their own enterprise in future.</p>
                    <p className="mission">Mission</p>
                    <p>To foster the entrepreneurship skill of students, nurture and help them to accelerate towards success by
                        facilitating business support systems, community and industrial exposure, infrastructural/financial support
                        information and expert mentoring to the selected start-ups.
                    </p>
                    <p>The basic aim of “Entrepreneurship Development and Start Up Centre (EDSUC)”, is to encourage college level
                        students today to start their own enterprise in future by:
                    </p>
                    <ul>
                        <li>Organizing lectures, expert talks and workshops periodically to create awareness about entrepreneurship.</li>
                        <li>Functioning as a guide for students with creative ideas which may lead towards to transform into successful company/ business.</li>
                        <li>Organizing the interaction meet and industrial visit to the company of successful entrepreneurs.</li>
                        <li>Identifying entrepreneurial traits in the students and building their capacity for entrepreneurship.</li>
                        <li>Encouraging technology start-up on the campus.</li>
                        <li>Cultivate the culture of innovation, applied research, development and entrepreneurship.</li>
                        <li>Providing Mentorship through individuals for students launching their start-ups.</li>
                        <li>To create awareness of various government schemes</li>
                        <li>MoU with outside entrepreneurship cells of different organizations like e-Cell IITB, COEP etc.</li>
                    </ul>
                    <p>Prominent entrepreneurship activities conducted under the “EDSUC” are listed below:</p>
                    <ol>
                        <li>One day workshop on “Women Empowerment through Entrepreneurship Development and Social Awareness”,
                            sponsored by “Maharashtra State Commission for Women” Mumbai, on 11th September 2018.
                        </li>
                        <div className="image_div">
                            <div>
                                <img className="image" src={Img1} alt="img" />
                            </div>
                            <div>
                                <img className="image" src={Img2} alt="img" />
                            </div>
                            <div>
                                <img className="image" src={Img3} alt="img" />
                            </div>
                        </div>

                        <li>Three days’ workshop on “Entrepreneurship Awareness Camp”, under the DST-NIMAT-2018-19 Programme,
                            sponsored by “Entrepreneurship Development Institute of India (EDII)”, Ahmadabad, Gujarat, during 04th-06th October 2018.
                        </li>
                        <div className="image_div">
                            <div>
                                <img className="image" src={Img4} alt="img" />
                            </div>
                            <div>
                                <img className="image" src={Img5} alt="img" />
                            </div>
                            <div>
                                <img className="image" src={Img6} alt="img" />
                            </div>
                        </div>

                        <li>Interaction meet of EDSUC students member with Prominent Alumni Mr. Tejas Narwade, Mr. Rahul Nehere and
                            Mr. Manoj Bhojane regarding Entrepreneurship, Innovation and Start Up on Monday 15th July 2019.
                        </li>
                        <div className="image_div">
                            <div>
                                <img className="image" src={Img7} alt="img" />
                            </div>
                            <div>
                                <img className="image" src={Img8} alt="img" />
                            </div>
                        </div>
                    </ol>
                    <p>Future Upcoming “EDSUC”, entrepreneurship activities:</p>
                    <ol>
                        <li>Three Days “ENTREPRENEURSHIP AWARENESS CAMP (EAC)”,
                            Sponsored by Department of Science and Technology, New Delhi under DST-NIMAT project
                            2019-20 in association with Entrepreneurship Development Institute of India, Gandhinagar (Gujrat).
                            The tentative scheduled date of this camp is 03rd - 05th October 2018.</li>
                        <li>Industrial Visit to Automotive Research Association of India (ARAI), Kothrud and Chakan
                            Campus in association with Automobile Engineering Department, GCOEARA, on 12th October 2019.</li>
                    </ol>
                </div>
            </div>
        </>
    )
}