import React, { Component } from 'react'
import Avatar from './components/Avatar/Avatar'
import logo from './logo.svg'
import Quinn from './util/RGQuinnHeadshot.JPG'
import KyleFujio from './util/KyleFujio.png'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-landing'>
          <h1 className='App-welcome'>Welcome to UConn's ACM</h1>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
		
        <h1 className='App-title'>Officers:</h1>
        <div className='App-avatars'>
          <Avatar name='Quinn Vissak' caption='Senior at the University of Connecticut. President of UConn ACM. Currently full stack developer at Squared Labs. Starting as a Mobile Software Engineer at WillowTree in June of 2018.' image={Quinn} />
          <Avatar name='Kyle Fujio' caption='Junior at the University of Connecticut. Vice-President of UConn ACM. Currently UConn Engineering tutor.' image={KyleFujio} />
		</div>

        <h1 className='App-title'>Members:</h1>
        <div className='App-avatars'>
          {/* Insert avatars here */}
        </div>

        <hr />
        <footer>Copyright University of Connecticut Association for Computing Machinery 2017</footer>
      </div>
    )
  }
}

export default App
