export class CreateReservationDto {
    client_id: number;
    restaran_id: number;
    table_id: number;
    reservation_time: string;
    number_of_guests: number;
    status_id: number;
}
