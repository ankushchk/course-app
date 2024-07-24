import { atom } from "recoil";
import { Course, User } from "../../types/types";
// Other components can access and update the authState similarly
export const authState = atom<boolean>({
  key: "authState",
  default: false,
});

export const coursesState = atom<Course[]>({
  key: "coursesState",
  default: [],
});

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
