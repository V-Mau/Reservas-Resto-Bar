export interface IBookingDto {
    id: number;
    date: string;
    time: string;
    user_id: number;
    status: 'active' | 'cancelled';
    description: string;
}