import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WorkspaceCard({ workspace, highlight }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Highlight search matches
  const highlightText = (text) => {
    if (!highlight || !text) return text;
    
    const regex = new RegExp(`(${highlight})`, 'gi');
    return text.split(regex).map((part, i) => 
      regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
  };

  return (
    <div className="workspace-card">
      <div className="card-header">
        <div className="card-badge">
          <span className="badge-type">{workspace.type}</span>
          <span className="badge-capacity">
            <i className="fas fa-user"></i> {workspace.capacity}
          </span>
        </div>
        <button 
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>

      <div className="card-image">
        <img 
          src={workspace.image || '/images/default-workspace.jpg'} 
          alt={workspace.name}
        />
      </div>

      <div className="card-body">
        <h3>{highlightText(workspace.name)}</h3>
        <p className="location">
          <i className="fas fa-map-marker-alt"></i> {highlightText(workspace.location)}
        </p>
        <p className="description">{highlightText(workspace.description)}</p>
        
        <div className="card-meta">
          <div className="price">
            <span>${workspace.price}</span>
            <small>/day</small>
          </div>
          <div className="rating">
            <i className="fas fa-star"></i>
            <span>{workspace.rating || '4.8'}</span>
          </div>
        </div>

        <div className="card-amenities">
          {workspace.amenities.slice(0, 3).map(amenity => (
            <span key={amenity} className="amenity-tag">
              {amenity}
            </span>
          ))}
          {workspace.amenities.length > 3 && (
            <span className="amenity-more">
              +{workspace.amenities.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="card-footer">
        <button 
          className="view-button"
          onClick={() => setShowModal(true)}
        >
          View Details
        </button>
        <Link to={`/book/${workspace.id}`} className="book-button">
          Book Now
        </Link>
      </div>

      {showModal && (
        <WorkspaceModal 
          workspace={workspace} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
}

const WorkspaceModal = ({ workspace, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [hours, setHours] = useState(4);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="modal-header">
          <h2>{workspace.name}</h2>
          <p className="modal-location">
            <i className="fas fa-map-marker-alt"></i> {workspace.location}
          </p>
        </div>

        <div className="modal-body">
          <div className="modal-gallery">
            <img src={workspace.image} alt={workspace.name} />
          </div>

          <div className="modal-details">
            <h3>About this space</h3>
            <p>{workspace.description}</p>

            <div className="detail-section">
              <h4>Amenities</h4>
              <div className="amenities-list">
                {workspace.amenities.map(amenity => (
                  <span key={amenity} className="amenity-item">
                    <i className="fas fa-check"></i> {amenity}
                  </span>
                ))}
              </div>
            </div>

            <div className="booking-form">
              <h3>Book This Space</h3>
              <div className="form-group">
                <label>Date</label>
                <input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label>Duration (hours)</label>
                <select value={hours} onChange={(e) => setHours(e.target.value)}>
                  {[2, 4, 6, 8, 10].map(h => (
                    <option key={h} value={h}>{h} hours</option>
                  ))}
                </select>
              </div>
              <div className="price-summary">
                <div className="price-item">
                  <span>${workspace.price} x {hours} hours</span>
                  <span>${workspace.price * hours}</span>
                </div>
                <div className="price-total">
                  <span>Total</span>
                  <span>${workspace.price * hours}</span>
                </div>
              </div>
              <button className="confirm-button">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};