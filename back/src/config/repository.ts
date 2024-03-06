import Booking from "../entities/Booking";
import Credential from "../entities/Credential";
import User from "../entities/User";
import { AppDataSource } from "./data-source";

export const usersModel = AppDataSource.getRepository(User);
export const credentialModel= AppDataSource.getRepository(Credential)
export const bookingModel = AppDataSource.getRepository(Booking)