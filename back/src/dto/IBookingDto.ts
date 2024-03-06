export interface createBookingDto {
    date: Date;
    time: Date;
    user_id: number;
    status: 'active' | 'cancelled';
    description: string;
}
