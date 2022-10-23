import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    username: '',
    website: '',
    password: '',
    isShowPasswordClicked: false,
    searchPassword: '',
    passwordDetails: [],
  }

  onSearchPassword = event => {
    this.setState({
      searchPassword: event.target.value,
    })
  }

  deletePassword = id => {
    const {passwordDetails} = this.state

    const updatedPasswordList = passwordDetails.filter(
      eachList => eachList.id !== id,
    )
    this.setState({passwordDetails: updatedPasswordList})
  }

  onSelectPassword = () => {
    this.setState(prevState => ({
      isShowPasswordClicked: !prevState.isShowPasswordClicked,
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickAddPassword = event => {
    event.preventDefault()
    const {username, password, website} = this.state

    const newPassword = {
      id: v4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordDetails: [...prevState.passwordDetails, newPassword],
    }))
  }

  render() {
    const {passwordDetails, isShowPasswordClicked, searchPassword} = this.state
    console.log(passwordDetails)

    // console.log(isShowPasswordClicked)

    const websiteIncludes = passwordDetails.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchPassword.toLowerCase()),
    )
    const count = websiteIncludes.length
    // const totalPassword = passwordDetails.length

    return (
      <div className="password-manager-container">
        <div className="card-container">
          <img
            alt="app logo"
            className="app-logo-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
          <div className="add-password-container">
            <div className="add-password-card">
              <h1 className="add-password-heading">Add New Password </h1>
              <form className="add-container">
                <div className="input-card">
                  <img
                    className="logo-image"
                    alt="website"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="input"
                    onChange={this.onChangeWebsite}
                  />
                </div>
                <div className="input-card">
                  <img
                    className="logo-image"
                    alt="username"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="input"
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="input-card">
                  <img
                    className="logo-image"
                    alt="password"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input"
                    onChange={this.onChangePassword}
                  />
                </div>
                <div className="button-card">
                  <button
                    type="submit"
                    testid="delete"
                    className="input-button"
                    onClick={this.onClickAddPassword}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              alt="password manager"
              className="password-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            />
          </div>
          <div className="password-item-container">
            <div className="card">
              <div className="password-count-card">
                <h1 className="name">Your Passwords</h1>
                <p className="count">{count}</p>
              </div>
              <div className="input-card">
                <img
                  alt="search"
                  className="logo-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                />
                <input
                  type="search"
                  className="input"
                  value={searchPassword}
                  placeholder="search"
                  onChange={this.onSearchPassword}
                />
              </div>
            </div>
            <hr className="separator" />
            <div className="checkbox-card">
              <input
                type="checkbox"
                id="password"
                value={isShowPasswordClicked}
                onChange={this.onSelectPassword}
              />
              <label htmlFor="password" className="checkbox">
                Show Passwords
              </label>
            </div>

            {count === 0 ? (
              <div>
                <img
                  alt="no passwords"
                  className="no-password-image"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                />
                <p className="input">No Passwords</p>
              </div>
            ) : (
              <ul className="list-container">
                {websiteIncludes.map(eachPassword => (
                  <PasswordItem
                    passwordListDetails={eachPassword}
                    key={eachPassword.id}
                    deletePassword={this.deletePassword}
                    isShowPasswordClicked={isShowPasswordClicked}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
