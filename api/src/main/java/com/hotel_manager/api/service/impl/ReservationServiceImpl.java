package com.hotel_manager.api.service.impl;

import com.hotel_manager.api.dto.BookingDto;
import com.hotel_manager.api.dto.GuestDto;
import com.hotel_manager.api.dto.ReservationDto;
import com.hotel_manager.api.exceptions.RoomNotFoundException;
import com.hotel_manager.api.models.Guest;
import com.hotel_manager.api.models.Reservation;
import com.hotel_manager.api.models.Room;
import com.hotel_manager.api.repository.ReservationRepository;
import com.hotel_manager.api.repository.RoomRepository;
import com.hotel_manager.api.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.hotel_manager.api.service.impl.RoomServiceImpl.getRoomDto;

@Service
public class ReservationServiceImpl implements ReservationService {

    private final RoomRepository roomRepository;
    private final ReservationRepository reservationRepository;

    @Autowired
    public ReservationServiceImpl(ReservationRepository reservationRepository, RoomRepository roomRepository) {
        this.reservationRepository = reservationRepository;
        this.roomRepository = roomRepository;
    }

    @Override
    public List<ReservationDto> getReservationsByRoomId(int roomId) {
        List<Reservation> reservations = reservationRepository.findByRoomId(roomId);
        return reservations.stream().map(this::mapToDto).toList();
    }

    @Override
    public ReservationDto createBooking(int roomId, BookingDto bookingDto) {
        Room room = roomRepository.findById(roomId).orElseThrow(() -> new RoomNotFoundException("Nie nzaleziono pokoju Exception!"));
        Reservation reservation = mapReservationToEntity(bookingDto.reservation);
        reservation.setRoom(room);
        Guest guest = mapGuestToEntity(bookingDto.guest, reservation);
        reservation.setGuest(guest);
        Reservation newReservation = reservationRepository.save(reservation);
        return mapToDto(newReservation);
    }

    @Override
    public List<ReservationDto> getAllReservations() {
        List<Reservation> reservations = reservationRepository.findAll();
        return reservations.stream().map(this::mapToDto).toList();
    }

    @Override
    public HttpStatus deleteReservation(String reservationId) {
        Reservation reservation = reservationRepository.findById(reservationId);
        reservationRepository.delete(reservation);
        return HttpStatus.OK;
    }

    private Reservation mapReservationToEntity(ReservationDto reservationDto) {
        Reservation reservation = new Reservation();
        reservation.setDateFrom(reservationDto.getDateFrom());
        reservation.setDateTo(reservationDto.getDateTo());
        return reservation;
    }

    private ReservationDto mapToDto(Reservation reservation) {
        ReservationDto reservationDto = new ReservationDto();
        reservationDto.setId(reservation.getId());
        reservationDto.setDateFrom(reservation.getDateFrom());
        reservationDto.setDateTo(reservation.getDateTo());
        reservationDto.setRoom(getRoomDto(reservation.getRoom()));
        reservationDto.setGuest(mapGuestToDto(reservation.getGuest()));
        return reservationDto;
    }

    private GuestDto mapGuestToDto(Guest guest) {
        GuestDto guestDto = new GuestDto();
        guestDto.setName(guest.getName());
        guestDto.setSurname(guest.getSurname());
        guestDto.setSex(guest.getSex());
        guestDto.setBirthday(guest.getBirthday());
        guestDto.setEmail(guest.getEmail());
        guestDto.setPhone(guest.getPhone());
        guestDto.setAddress(guest.getAddress());
        guestDto.setCity(guest.getCity());
        guestDto.setState(guest.getState());
        guestDto.setZipCode(guest.getZipCode());
        return guestDto;
    }

    private Guest mapGuestToEntity(GuestDto guestDto, Reservation reservation) {
        Guest guest = new Guest();
        guest.setName(guestDto.getName());
        guest.setSurname(guestDto.getSurname());
        guest.setSex(guestDto.getSex());
        guest.setBirthday(guestDto.getBirthday());
        guest.setEmail(guestDto.getEmail());
        guest.setPhone(guestDto.getPhone());
        guest.setAddress(guestDto.getAddress());
        guest.setCity(guestDto.getCity());
        guest.setState(guestDto.getState());
        guest.setZipCode(guestDto.getZipCode());
        guest.setReservation(reservation);
        return guest;
    }
}
