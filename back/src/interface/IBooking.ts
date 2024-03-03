// * Paso 9-2 = IBooking

export interface IBooking {
    
    id: number,
    date: string,
    time: string,
    user_id: number
    status: 'active' | 'cancelled',
    description: string
}

