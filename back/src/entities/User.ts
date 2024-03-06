import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Booking from "./Booking";
import Credential from './Credential'


@Entity({
    name: "users"
})
 class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthdate: Date;

    @Column()
    nDni: string;

    @OneToOne(() => Credential, (credential) => credential.user)
    @JoinColumn()
    credentials: Credential;

    @OneToMany(() => Booking, (booking) => booking.user)
    bookings: Booking[];
    
}
export default User;