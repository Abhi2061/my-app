import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class Forgot extends Component {
  render() {
    return (
      
        <form>
            <center>
              <img src={require('./lock.png')} width="100" height="100"/>

              <div class="panel-heading">                            
                <h3 class="pt-3 font-weight-bold">Forgot Password</h3>
              </div>
            </center>            

            <div class="form-group py-2">
                <div class="input-field">
                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div> 
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    <Link className="nav-link" to={'/change-password'}>
                    Send Security Code
                    </Link>
                  </button>
                </div>
            </div>            
        </form>
    )
  }
}