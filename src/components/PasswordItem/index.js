import './index.css'

const PasswordItem = props => {
  const {passwordListDetails, deletePassword, isShowPasswordClicked} = props
  const {username, password, website, id} = passwordListDetails
  const initial = username.toUpperCase().slice(0, 1)
  // console.log(isShowPasswordClicked)
  const onClickDelete = () => {
    deletePassword(id)
  }

  return (
    <li className="item-container">
      <div className="name-container">
        <div className="name-card">
          <p className="initial">{initial}</p>
          <div className="details-card">
            <p className="entered-website">{website}</p>
            <p className="entered-username">{username}</p>
            {isShowPasswordClicked ? (
              <p className="entered-password">{password}</p>
            ) : (
              <img
                alt="stars"
                className="entered-password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              />
            )}
          </div>
        </div>
        <button className="delete-button" type="button" onClick={onClickDelete}>
          <img
            className="delete-image"
            alt="delete"
            testid="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
