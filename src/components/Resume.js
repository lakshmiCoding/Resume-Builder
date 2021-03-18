import React, {useContext } from 'react'
import '../styles/Resume.css'
import { ResumeContext } from './ResumeContext'

const Resume = ({navigation}) => {

  const { go } = navigation;

    const [final, setFinal] = useContext(ResumeContext);

    return (
    <div>
        {/* <pre>
        {JSON.stringify(final, null, 2)}
      </pre> */}
      <Template final={final} go={ go }/>
    </div>
    );
};
export const Template = ({ summary, final, go }) => (
    <>
    <div className="box">
            <div className="header">
                <div className="header-left">
                <div className="name">
                    <h1 className="first-name">{final.user.firstName}</h1>
                    <h1 className="last-name">{final.user.lastName}</h1>
                </div>
                </div>
                <div className="header-right">
                <div className="email">
                    <p>{final.user.email}</p>
                    <i className="fas fa-envelope"></i>
                </div>
                <div className="linkedin">
                    <p>{final.user.address}/</p>
                    <i className="fa fa-map-marker"></i>
                </div>
                <div className="phone">
                    <p>{final.user.phone}</p>
                    <i className="fas fa-phone"></i>
                </div>
                </div>
            </div>
            <hr />
            <div className="objective">
                <div className="obj-heading grey">
                <i className="fas fa-bullseye icon"></i>
                <h2>Objectve</h2>
                </div>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta rem,
                sit ex accusamus quisquam incidunt tempora, alias recusandae error
                perspiciatis a nihil quibusdam ea, tenetur harum. Earum doloribus
                quisquam repellendus!
                </p>
            </div>
            <div className="education">
                <div className="ed-heading grey">
                <i className="fas fa-school icon"></i>
                <h2>Education</h2>
                </div>

                <table>
                <tr>
                    <th>Institution</th>
                    <th>Subject</th>
                    <th>Year of passing</th>
                    <th>CGPA</th>
                </tr>
                {final.education.map((item, index) => {
                    return(
                        <tr key={index}>
                                <td>{item.instName}</td>
                                <td>{item.degree}</td>
                                <td>{item.year}</td>
                                <td>{item.cgpa}</td>
                        </tr>
                        );
                    })}
                </table>
            </div>
            <div className="education">
                <div className="ed-heading grey">
                <i className="fas fa-school icon"></i>
                <h2>Work Experience</h2>
                </div>

                <table>
                <tr>
                    <th>Company</th>
                    <th>Designation</th>
                    <th>Year</th>
                </tr>
                {final.experience.map((item, index) => {
                    return(
                        <tr key={index}>
                                <td>{item.company}</td>
                                <td>{item.designation}</td>
                                <td>{item.fromyear} - {item.toyear}</td>
                        </tr>
                    );
                })}
                </table>
            </div>
            <div className="skills">
                <div className="skills-heading grey">
                        <i className="fas fa-tools icon"></i>
                        <h2>Skills</h2>
                </div>

                <ul>
                {final.skillSet.map((item, index) => {
                    return(
                        <li key={index}>{item.value}</li>
                    );
                })}
                </ul>
            </div>
        </div>
    </>
);

export default Resume;

