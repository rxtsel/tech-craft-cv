import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

export function getUser(userRepository: UserRepository) {
  return async (): Promise<User | null> => {
    return await userRepository.get();
  };
}
