import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from './User';

@Entity({ name: "bookings" })
class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column()
    status: string;

    @Column()
    description: string;

    @ManyToOne(() => User, (user) => user.bookings)
    user: User;
}

export default Booking;
