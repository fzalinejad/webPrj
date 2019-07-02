import React from 'react' ;
import '../styles/header.css';

class Header extends React.Component{

    constructor(){
        super();
        this.state={

        }
    }
    render() {
        return(
            <div className="signuploginguid">
                <div className="signuplogin">
                    <div className="login">
                        <span id="login">ورود</span>
                    </div>
                    <div className="signup">
                        <span id="signup">عضویت</span>
                    </div>

                </div>
                <div className="guid">
                    <span id="guid">راهنما</span>
                </div>
            </div>
        )
    }
}

export default Header;