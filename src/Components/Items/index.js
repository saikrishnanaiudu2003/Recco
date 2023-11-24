// Import necessary modules and components
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './index.css';

// Define the Items component
class Items extends Component {
  // Initial state of the component
  state = {
    isPopupOpen: false,        // State for the approval popup
    isWrongPopupOpen: false,   // State for the wrong item popup
    isEditPopupOpen: false,    // State for the edit item popup
    approvalStatus: '',        // State to track approval status
    missing: "",               // State to track missing item status
    editText: ""               // State to track edited text status
  };

  // Handler for the correct button click to open the approval popup
  handleCorrectButtonClick = () => {
    this.setState({ isPopupOpen: true });
  };

  // Handler to close the approval popup
  closePopup = () => {
    this.setState({ isPopupOpen: false });
  };

  // Handler for the wrong button click to open the wrong item popup
  handleWrongButtonClick = () => {
    this.setState({ isWrongPopupOpen: true });
  };

  // Handler to close the wrong item popup
  closeWrongPopup = () => {
    this.setState({ isWrongPopupOpen: false });
  };

  // Handler for the edit button click to open the edit item popup
  handleEditButtonClick = () => {
    this.setState({ isEditPopupOpen: true });
  };

  // Handler for the approval action, e.g., changing status to 'approved'
  handleApproveClick = () => {
    this.setState({ approvalStatus: 'approved' });
    this.closePopup();
  };

  // Handler for marking an item as missing
  handleMissingItem = () => {
    this.setState({ missing: "Missing" });
    this.closeWrongPopup();
  };

  // Handler for updating an item
  handleUpdateClick = () => {
    this.setState({ editText: "Updated" });
    this.closeEditPopup();
  };

  // Handler to close the edit item popup
  closeEditPopup = () => {
    this.setState({ isEditPopupOpen: false });
  };

  // Render the component
  render() {
    // Destructure state and props
    const { approvalStatus, missing, editText } = this.state;
    const { details } = this.props;
    const {
      imageUrl,
      productName,
      brand,
      price,
      quantity,
      total,
      tickImage,
      wrongImage,
      edit,
    } = details;

    // JSX structure for rendering the component
    return (
      <div>
        {/* List item */}
        <li className="flex-list-items">
          {/* Render item details */}
          <img src={imageUrl} className="item-image" alt="item" />
          <div className="items">
            <p className="items-list-para-card">{productName}</p>
          </div>
          <p className="items-list-para-card">{brand}</p>
          <p className="items-list-para-card">{price}</p>
          <p className="items-list-para-card">{quantity}</p>
          <p className="items-list-para-card">{total}</p>
          <p className="items-list-para-card bg-color">{approvalStatus} {editText}<span className='missing'>{missing}</span></p>
          
          {/* Buttons for approval, marking as wrong, and editing */}
          <button type="button" className="correct-button" onClick={this.handleCorrectButtonClick}>
            <img src={tickImage} className="image-correct true-color" alt="correct" />
          </button>
          <button type="button" className="wrong-button" onClick={this.handleWrongButtonClick}>{wrongImage}</button>
          <button type="button" className="wrong-button" onClick={this.handleEditButtonClick}>{edit}</button>

          {/* Approval popup */}
          <Popup open={this.state.isPopupOpen} closeOnDocumentClick onClose={this.closePopup}>
            <div className="popup">
              <p>Are you sure you want to approve?</p>
              <button type="button" onClick={this.handleApproveClick}>
                Yes
              </button>
              <button type="button" onClick={this.closePopup}>
                No
              </button>
            </div>
          </Popup>

          {/* Wrong item popup */}
          <Popup open={this.state.isWrongPopupOpen} closeOnDocumentClick onClose={this.closeWrongPopup}>
            <div className="popup">
              <p>Is Chicken Removed, missing</p>
              <button type="button" onClick={this.handleMissingItem}>
                Yes
              </button>
              <button type="button" onClick={this.closeWrongPopup}>
                No
              </button>
            </div>
          </Popup>

          {/* Edit item popup */}
          <Popup open={this.state.isEditPopupOpen} closeOnDocumentClick onClose={this.closeEditPopup}>
            <div className="popup">
              <p>Edit Item</p>
              <p>{productName}</p>
              <img className='item-image' src={imageUrl} alt="logo" />
              <button type="button" onClick={this.handleUpdateClick}>
                Update
              </button>
              <button type="button" onClick={this.closeEditPopup}>
                Cancel
              </button>
            </div>
          </Popup>
        </li>

        {/* Horizontal line */}
        <hr className='horizantal'/>
      </div>
    );
  }
}

// Export the Items component
export default Items;
