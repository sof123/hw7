//import {setLocation, getLocation} from '../location'
import React, { Component, PropTypes } from 'react'
import  {connect}  from 'react-redux'

export const ProfileItem = ({logout, goToMain}) =>
(
      <div>
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <meta name="author" content="Simi Fagbemi" />
        <input type="button" defaultValue="Return to main page" onClick={goToMain} id="goToMainId" />
        <input type="button" defaultValue="logout" onClick={logout} id="logoutId" />
        <table>
          <tbody><tr>
              <td>Current profile picture </td>
              <td>
                <img src="http://cliparts.co/cliparts/Mdi/9MK/Mdi9MKxc7.png" id="currentProfilePic" height={125} width={100} />
                Upload a new profile pic:
                <input type="file" defaultValue="Upload new profile pic" />
              </td>
            </tr>
            <tr>
              <td>Display Name</td>
              <td>  <input name="DisplayName" required />
                <span id="DisplayNameText"> JJ </span>
              </td>
            </tr>
            <tr>
              <td>E-mail Address</td>
              <td><input name="Email" type="email" />
                <span id="EmailText"> abc123@gmail.com </span>
              </td>
            </tr>
            <tr>
              <td>Phone Number (format: 5555555555) </td>
              <td><input name="PhoneNumber" required type="tel" pattern="\d{10}" />
                <span id="PhoneNumberText"> 5555555555 </span>
              </td>
            </tr>
            <tr>
              <td>Date of Birth </td>
              <td>
                <span id="DOBText"> 01/01/1995 </span>
              </td>
            </tr>
            <tr>
              <td>Zipcode (format: 55555) </td>
              <td><input name="Zipcode" type="number" required />
                <span id="ZipcodeText"> 55555 </span>
              </td>
            </tr>
            <tr>
              <td>Password </td>
              <td><input name="Password" required type="password" />
                <span id="PasswordText"> </span>
              </td>
            </tr>
            <tr><td colSpan={2}><input type="button" defaultValue="Update" id="update" onclick="updateVals()" /><br />
              </td></tr>
          </tbody></table>
      </div>
)

/*ProfileItem.propTypes = {
    //id: PropTypes.number.isRequired,
    //location: PropTypes.symbol.isRequired
}
*/

export default connect(null, (dispatch, ownProps) => {
        return {
            logout: () => dispatch({ type: 'goToLandingToDo', id: ownProps.id }),
            goToMain: () => dispatch({ type: 'goToMainToDo', id: ownProps.id })
        }
    })(ProfileItem)
