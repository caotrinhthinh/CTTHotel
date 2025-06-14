import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRoomById, updateRoom } from "../utils/ApiFunctions";
import RoomTypeSelector from "../common/RoomTypeSelector"; // Có thể bỏ nếu không dùng

const EditRoom = () => {
  const [room, setRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const { roomId } = useParams();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setRoom({ ...room, photo: selectedImage });
      setImagePreview(URL.createObjectURL(selectedImage));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRoom({ ...room, [name]: value });
  };

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const roomData = await getRoomById(roomId);
        setRoom({
          roomType: roomData.roomType || "",
          roomPrice: roomData.roomPrice || "",
          photo: null,
        });

        if (
          typeof roomData.photo === "string" &&
          roomData.photo.trim() !== ""
        ) {
          const imageSrc = roomData.photo.startsWith("data:image")
            ? roomData.photo
            : `data:image/jpeg;base64,${roomData.photo}`;
          setImagePreview(imageSrc);
        } else {
          setImagePreview("");
        }
      } catch (error) {
        console.error("Error fetching room", error);
        setErrorMessage("Failed to load room data.");
      }
    };

    fetchRoom();
  }, [roomId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await updateRoom(roomId, room);
      if (response.status === 200) {
        setSuccessMessage("Room updated successfully");
        setErrorMessage("");

        const updatedRoomData = await getRoomById(roomId);
        setRoom({
          roomType: updatedRoomData.roomType || "",
          roomPrice: updatedRoomData.roomPrice || "",
          photo: null,
        });

        if (
          typeof updatedRoomData.photo === "string" &&
          updatedRoomData.photo.trim() !== ""
        ) {
          const imageSrc = updatedRoomData.photo.startsWith("data:image")
            ? updatedRoomData.photo
            : `data:image/jpeg;base64,${updatedRoomData.photo}`;
          setImagePreview(imageSrc);
        } else {
          setImagePreview("");
        }
      } else {
        setErrorMessage("Error updating room");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h2 className="card-title text-center mb-4">Edit Room</h2>

            {successMessage && (
              <div className="alert alert-success shadow-sm">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="alert alert-danger shadow-sm">{errorMessage}</div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Room Type */}
              <div className="mb-3">
                <label htmlFor="roomType" className="form-label fw-semibold">
                  Room Type
                </label>
                <input
                  className="form-control"
                  id="roomType"
                  type="text"
                  name="roomType"
                  value={room.roomType}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Room Price */}
              <div className="mb-3">
                <label htmlFor="roomPrice" className="form-label fw-semibold">
                  Room Price
                </label>
                <input
                  className="form-control"
                  id="roomPrice"
                  type="number"
                  name="roomPrice"
                  value={room.roomPrice}
                  onChange={handleInputChange}
                  required
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
              <div className="d-grid gap-2 d-md-flex mt-2">
                <Link to="/existing-rooms" className="btn btn-outline-info">
                  Back
                </Link>
                <button type="submit" className="btn btn-outline-warning">
                  Edit Room
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditRoom;
