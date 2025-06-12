import React, { useState } from "react";
import { addRoom } from "../utils/ApiFunctions";
import RoomTypeSelector from "../common/RoomTypeSelector";

const AddRoom = () => {
  const [newRoom, setNewRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRoomInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "roomPrice") {
      if (!isNaN(value)) {
        value = parseInt(value);
      } else {
        value = "";
      }
    }
    setNewRoom({ ...newRoom, [name]: value });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setNewRoom({ ...newRoom, photo: selectedImage });
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await addRoom(
        newRoom.photo,
        newRoom.roomType,
        newRoom.roomPrice
      );

      if (success !== undefined) {
        setSuccessMessage("A new room was added to the database");
        setNewRoom({ photo: null, roomType: "", roomPrice: "" });
        setImagePreview("");
        setErrorMessage("");
      } else {
        setErrorMessage("Error adding new room");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }

    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  };

  return (
    <>
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4 p-4">
              <h2 className="card-title text-center mb-4">Add a New Room</h2>
              {successMessage && (
                <div className="alert alert-success shadow-sm ">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="alert alert-danger shadow-sm">
                  {errorMessage}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                {/* Room Type */}
                <div className="mb-3">
                  <label htmlFor="roomType" className="form-label fw-semibold">
                    Room Type
                  </label>
                  <RoomTypeSelector
                    handleRoomInputChange={handleRoomInputChange}
                    newRoom={newRoom}
                  />
                </div>

                {/* Room Price */}
                <div className="mb-3">
                  <label htmlFor="roomPrice" className="form-label fw-semibold">
                    Room Price
                  </label>
                  <input
                    className="form-control"
                    required
                    id="roomPrice"
                    type="number"
                    name="roomPrice"
                    value={newRoom.roomPrice}
                    onChange={handleRoomInputChange}
                  />
                </div>

                {/* Room Photo */}
                <div className="mb-3">
                  <label htmlFor="photo" className="form-label fw-semibold">
                    Room Photo
                  </label>
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    className="form-control"
                    onChange={handleImageChange}
                  />
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview Room"
                      className="img-fluid rounded-3 mt-3 border shadow-sm"
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  )}
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-3"
                    onSubmit={handleSubmit}
                    disabled={!newRoom.roomType || !newRoom.roomPrice}
                  >
                    Save Room
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddRoom;
