import React from 'react'
import './Usercard.css';

const UseEffectAPI = ({waiting,users}) => {
    return waiting ? (   
          <div className="imgdiv">
            <img src="https://cdn.dribbble.com/users/148670/screenshots/5252136/media/ecd5f652dc032d85e20cb72c450e8525.gif" alt="Waiting"/>
          </div>
        ) : 
        (
        <div className="container text-center">
            <div className="row p-0">
                {users.length &&
                users.map((user) => {
                return (
                    
                        <div className="col-md-4 col-12 py-2" key={user.id}>
                            <div className="card">
                                <img src={user.avatar} alt="images" className="img-fluid"/>
                                    <div className="content">
                                        <h2>
                                            {user.first_name} {user.last_name}
                                        </h2>
                                        <a href="#">{user.email}</a>
                                    </div>
                            </div>
                        </div>
                    
                    );
            
                })}
            </div>
        </div>
        )
}

export default UseEffectAPI;