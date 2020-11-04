import React from 'react';

function Signup () {
    return (
        <div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" id="first_name" type="text" className="validate">
                                <label for="first_name">First Name</label>
                            </input>
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" id="last_name" type="text" className="validate">
                                <label for="last_name">Last Name</label>
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input disabled value="I am not editable" id="disabled" type="text" className="validate"/>
                            <label> Disabled</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12"> 
                            <input id="password" type="password" className="validate" />
                            <label for="password"> Password</label>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12"> 
                        This is an inline input field:
                        <div className="input-field inline">
                        <input id="email_inline" type="email" class="validate"/>
                            <label for="email_inline">Email</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>

                        </div>

                        </div>

                    </div>

                </form>
            </div>
           
        </div>
    )
}

export default Signup;