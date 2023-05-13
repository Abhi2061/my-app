import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class Update extends Component {
  render() {
    return (
        <form>
            <div class="panel-heading">                            
                <h3 class="pt-3 font-weight-bold">Change Password</h3>
            </div>

            <div class="form-group py-2">
                <div class="input-field">
                <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter OTP"
                    />
                  </div> 
                </div>
            </div>
            
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter New Password"
                />                
            </div>

            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    <Link className="nav-link" to={'/sign-in'}>
                    Change Password
                    </Link>
                </button>
            </div>
            
        </form>
    )
  }
}