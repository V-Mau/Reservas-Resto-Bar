export interface createBookingDto {
    date: string;
    time: string;
    user_id: number;
    status: 'active' | 'cancelled';
    description: string;
}
