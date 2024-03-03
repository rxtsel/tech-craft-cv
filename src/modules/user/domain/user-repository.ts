import { User } from "./user";

export interface UserRepository {
  get: () => Promise<User | null>;
}
