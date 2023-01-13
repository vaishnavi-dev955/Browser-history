import './index.css'

const Historysearch = props => {
  const {initialHistoryList, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = initialHistoryList

  const onDelete = () => {
    onDeleteHistory(id)
  }

  if (title !== undefined) {
    return (
      <li className="newitem">
        <div className="Item-container">
          <p className="time1">{timeAccessed}</p>
          <img src={logoUrl} className="image1" alt="domain logo" />
          <p className="title1">{title}</p>
          <p className="domainUrl1">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="image2"
            alt="delete"
          />
        </button>
      </li>
    )
  }

  return (
    <li className="list-item">
      <div className="empty">
        <p className="para">There is no History to show</p>
      </div>
    </li>
  )
}

export default Historysearch
