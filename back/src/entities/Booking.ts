import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from './User';

@Entity({ name: "bookings" })
class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: Date;

    @Column()
    status: string;

    @Column()
    description: string;

    @ManyToOne(() => User, (user) => user.bookings)
    user: User;
}

export default Booking;
