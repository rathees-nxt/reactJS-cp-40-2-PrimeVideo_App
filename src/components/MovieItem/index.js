// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        trigger={
          <img className="item-img" src={thumbnailUrl} alt="thumbnail" />
        }
        position="top-center"
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              className="close-btn"
              data-testid="closeButton"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="player-container">
              <ReactPlayer url={videoUrl} controls height={300} width={600} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
