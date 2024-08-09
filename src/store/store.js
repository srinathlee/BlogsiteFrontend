import { create } from 'zustand'

const useStore = create((set) => ({
  user:{},
  setUser:(user)=>set({user:user})
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
}))

export default useStore