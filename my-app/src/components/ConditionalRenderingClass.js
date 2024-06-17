import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? "data loaded" : "data loading...."}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please follow the steps below:</p>
                <ol>
                    <li>confirm your email</li>
                    <li>complete your profile</li>
                    <li>Subcribe to the newsletter</li>
                </ol>
            </div>

        ) : (
            <p>Please sign in</p>
        )}
      </div>
    )
  }
}

export default ConditionalRenderingClass