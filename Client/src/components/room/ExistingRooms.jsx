import React, { useEffect, useState } from "react";
import { deleteRoom, getAllRooms } from "../utils/ApiFunctions";
import { Col, Row } from "react-bootstrap";
import RoomFilter from "../common/RoomFilter";
import RoomPaginator from "../common/RoomPaginator";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const ExistingRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [selectedRoomType, _setSelectedRoomType] = useState("");
  const [_successMessage, setSuccessMessage] = useState("");
  const [_errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    setIsLoading(true);
    try {
      const result = await getAllRooms();
      setRooms(result);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    if (selectedRoomType === "") {
      setFilteredRooms(rooms);
    } else {
      const filtered = rooms.filter(
        (room) => room.roomType === selectedRoomType
      );
      setFilteredRooms(filtered);
    }
    setCurrentPage(1);
  }, [rooms, selectedRoomType]);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (roomId) => {
    try {
      const result = await deleteRoom(roomId);
      if (result === "") {
        setSuccessMessage(`Room No ${roomId} was delete`);
        fetchRooms();
      } else {
        console.error(`Error deleting room: ${result.message}`);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }

    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  };

  const caculateTotalPages = (filteredRooms, roomsPerPage, rooms) => {
    const totalRooms =
      filteredRooms.length > 0 ? filteredRooms.length : rooms.length;
    return Math.ceil(totalRooms / roomsPerPage);
  };

  const indexOfLastRooms = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRooms - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRooms);

  return (
    <div>
      <>
        {isLoading ? (
          <p>Loading existing rooms</p>
        ) : (
          <>
            <section className="mt-5 mb-5 container">
              <div className="d-flex justify-content-between align-items-center mb-4 mt-5 px-3">
                <h2 className="fw-bold m-0">Existing Rooms</h2>
              </div>
              <Row className="align-items-center mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                  <RoomFilter data={rooms} setFilteredData={setFilteredRooms} />
                </Col>
                <Col md={6} className="text-md-end text-center">
                  <Link
                    to="/add-room"
                    className="btn btn-success d-inline-flex align-items-center gap-2 px-3 py-2 rounded-3"
                  >
                    <FaPlus />
                    Add Room
                  </Link>
                </Col>
              </Row>
              <table className="table table-bordered table-hover">
                <thead>
                  <tr className="text-center">
                    <th>ID</th>
                    <th>Room Type</th>
                    <th>Room Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {currentRooms.map((room) => (
                    <tr key={room.id} className="text-center">
                      <td>{room.id}</td>
                      <td>{room.roomType}</td>
                      <td>{room.roomPrice}</td>
                      <td className="d-flex gap-2 justify-content-center">
                        <Link
                          to={`/edit-room/${room.id}`}
                          className="btn btn-info btn-sm"
                        >
                          <FaEye className="me-1" />
                          View
                        </Link>

                        <Link
                          to={`/edit-room/${room.id}`}
                          className="btn btn-warning btn-sm"
                        >
                          <FaEdit className="me-1" />
                          Edit
                        </Link>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(room.id)}
                        >
                          <FaTrashAlt className="me-1" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <RoomPaginator
                currentPage={currentPage}
                totalPages={caculateTotalPages(
                  filteredRooms,
                  roomsPerPage,
                  rooms
                )}
                onPageChange={handlePaginationClick}
              />
            </section>
          </>
        )}
      </>
    </div>
  );
};

export default ExistingRooms;
