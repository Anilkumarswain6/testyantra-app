import React from 'react'
import logo from './asset/logotest.png'

const Login = () => {
    return (
        <div className='bg-image'>
            <div className='login-grid'>
                <div className='login-card'>
                    <div>
                        <img alt='anil' src={logo} />
                    </div>
                    <h3>Login</h3>

                    <div className='login-form'>
                        <form className="row g-3 needs-validation" novalidate>
                            <div className="col-md-12">
                                <label for="validationCustom01" className="form-label">First name</label>
                                <input type="text" className="form-control" id="validationCustom01"  required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                        </form>
                        <form className="row g-3 needs-validation" novalidate>
                            <div className="col-md-12">
                                <label for="validationCustom02" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="validationCustom02"  required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                        </form>
                        <div className='button-group-form'>
                        <button type="button" class="btn btn-warning form-button">Login</button>
                        <button type="button" class="btn btn-warning form-button1">Warning</button>
                        <button type="button" class="btn btn-secondary form-button2">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login