//import {setLocation, getLocation} from '../location'
import React, { Component, PropTypes } from 'react'
import  {connect } from 'react-redux'

export const LandingItem = ({login}) =>
(
      <div>
        <meta name="author" content="Simi Fagbemi" />
        Create a new account
        <br /><br />
        <form id="signIn" name="submitForm" method="" action="" onSubmit={login}>
          <table className="form">
            <tbody><tr>
                <td>Account Name</td>
                <td><input name="AccountName" required /></td>
              </tr>
              <tr>
                <td>Display Name (Optional)</td>
                <td><input name="DisplayName" /></td>
              </tr>
              <tr>
                <td>E-mail Address</td>
                <td><input name="Email" type="email" required /></td>
              </tr>
              <tr>
                <td>Phone Number (format: 5555555555) </td>
                <td><input name="PhoneNumber" required type="tel" pattern="\d{10}" /></td>
              </tr>
              <tr>
                <td>Date of Birth (MM/DD/YYYY) </td>
                <td><input name="DOB" required /></td>
              </tr>
              <tr>
                <td>Zipcode (format: 55555) </td>
                <td><input name="Zipcode" type="number" pattern="\d{5}" required /></td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input name="Password" required type="password" /></td>
              </tr>
              <tr>
                <td>Password Confirmation</td>
                <td><input name="PasswordConfirmation" type="password" required /></td>
              </tr>
              <tr><td colSpan={2}><input type="submit" defaultValue="Submit form" /><br />
                  <input type="reset" defaultValue="Clear" /></td></tr>
            </tbody></table>
          <input type="hidden" name="timeStamp" />
        </form>
        <br /><br />
        Already a user? Login
        <br /><br />
        <table>
          <tbody><tr>
              <td>Account Name</td>
              <td>  <input name="AccountName" required />
                <span id="AccountNameText"></span>
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input name="Password" required type="password" />
                <span id="PasswordText"></span>
              </td>
            </tr>
            <tr><td colSpan={2}><input type="button" defaultValue="Login" id="update" onClick={login} /><br />
              </td></tr>
          </tbody></table>
      </div>
)

//dispatching  method to reducer
export default connect(null, (dispatch, ownProps) => {
        return {
            login: () => dispatch({ type: 'loginToDo', id: ownProps.id })
        }
    })(LandingItem)
