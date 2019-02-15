import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
        return (
            <div>  
                <h1> Admin </h1>
                <p> React, Redux and react router </p>
                <Link to="about"> learn more </Link>
             </div>
        ); 
    }
}

export default HomePage;