
import React, { Component, PropTypes } from 'react'
import {connect } from 'react-redux'
import LandingItem from './Landing'
import MainItem from './Main'
import ProfileItem from './Profile'

//render app component depending on location member in state
const App = ({location}) =>
{
  if (location == "Main.js")
  {
    return (<div>
        <MainItem />
      </div>
    );
  }
  else if (location == "Profile.js")
  {
    return ( <div>
        <ProfileItem />
      </div>
    );
  }
  else if (location == "Landing.js")
  {
    return (<div>
        <LandingItem />
      </div>
    );
  }

  return (<div>
      <LandingItem />
    </div>
  );

}

export default connect(
	(state) =>{
				return {
					location : state.location
				}
	}
)(App);
