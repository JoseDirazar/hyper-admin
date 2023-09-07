'use client'
import { create } from 'zustand'

export const useStore = create((set) => ({
  users: [],
  updateUsers: () => set((state) => ({ users: [...state.users]})),
}))