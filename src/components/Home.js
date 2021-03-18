import React from 'react'
// import { Link } from 'react-router-dom'

const Home = ({ navigation }) => {
    return (
        <div className="home">
            <div className="homelayout">
            <h1 className="title">Resume Builder</h1>
                <p className="sub">Create your very own professional resume.</p>
            {/* <Link 
            to="/create"
            className="btn btn-create">
                Create Your Resume
            </Link> */}
            <button
            className="btn btn-create"
            onClick={() => navigation.next()}>
                Create your resume
            </button>
            </div>
        </div>
    )
}

export default Home
