package com.example.CTTHotel.Response;

import java.math.BigDecimal;
import java.util.Base64;
import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RoomResponse {
    private Long id;
    private String roomType;
    private BigDecimal roomPrice;
    private boolean isBooked;
    private String photo;
    private List<BookingResponse> bookings;

    public RoomResponse(Long id, BigDecimal roomPrice, String roomType) {
        this.id = id;
        this.roomPrice = roomPrice;
        this.roomType = roomType;
    }

    public RoomResponse(List<BookingResponse> bookings, Long id, boolean isBooked, byte[] photoBytes, BigDecimal roomPrice, String roomType) {
        this.bookings = bookings;
        this.id = id;
        this.isBooked = isBooked;
        this.photo = photoBytes != null ? Base64.getEncoder().encodeToString(photoBytes) : null;
        this.roomPrice = roomPrice;
        this.roomType = roomType;
    }
}
