import { create } from "zustand"

interface IState {
  loading: boolean
}

interface IActions {
  setLoading: (value: boolean) => void
  reset: () => void
}

const initialState: IState = {
  loading: false,
}

export const useAuthLoginStore = create<IState & IActions>((set) => ({
  ...initialState,
  setLoading: (value) => set(() => ({ loading: value })),
  reset: () => set(initialState),
}))
