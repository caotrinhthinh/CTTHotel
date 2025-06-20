import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

export async function addRoom(photo, roomType, roomPrice) {
  const formData = new FormData();
  formData.append("photo", photo);
  formData.append("roomType", roomType);
  formData.append("roomPrice", roomPrice);

  // This functions adds a  new room to the database
  const response = await api.post("/rooms/add/new-room", formData);
  if (response.status === 201) {
    return true;
  } else {
    return false;
  }
}

// This function gets all room type from the database
export async function getRoomTypes() {
  try {
    const response = await api.get("/rooms/room/types");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching room types");
  }
}

// This functions gets all rooms from the database
export async function getAllRooms() {
  try {
    const result = await api.get("rooms/all-rooms");
    return result.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching rooms");
  }
}

// This function deletes a room bt the id
export async function deleteRoom(roomId) {
  try {
    const result = await api.delete(`rooms/delete/room/${roomId}`);
    return result.data;
  } catch (error) {
    throw new Error(`Error deleting room ${error.message}`);
  }
}

// This function update a room
export async function updateRoom(roomId, roomData) {
  const formData = new FormData();
  formData.append("roomType", roomData.roomType);
  formData.append("roomPrice", roomData.roomPrice);
  formData.append("photo", roomData.photo);
  const response = await api.put(`/rooms/update/${roomId}`, formData);
  return response;
}

// This function get a room by Id
export async function getRoomById(roomId) {
  try {
    const result = await api.get(`/rooms/room/${roomId}`);
    return result.data;
  } catch (error) {
    throw new Error(`Error fetching room ${error.message}`);
  }
}
