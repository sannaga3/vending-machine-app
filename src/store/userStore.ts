import { User } from "@/types/user";
import { creator } from "@/store/creator";

type UserAction = {
  setCurrentUser: (user: User) => void;
  unsetCurrentUser: () => void;
};

type UserState = {
  currentUser: null | User;
};

const initialUserState: UserState = {
  currentUser: null,
};

export const userStore = creator<UserState & UserAction>((set) => ({
  ...initialUserState,
  setCurrentUser: (user: User) => {
    set((state) => ({
      ...state,
      currentUser: user,
    }));
  },
  unsetCurrentUser: () => {
    set({ ...initialUserState });
  },
}));
