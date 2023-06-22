import { create } from 'zustand'

export interface NavItemProps {
  name: string
  link: string
  subMenu?: {
    name: string
    link: string
  }[]
}

export interface NavItemsState {
  navItems: NavItemProps[]
  isOpen: boolean
  currentPath: string
}

interface ActionsProps {
  adddNavItems: (navItems: NavItemProps[]) => void
  setCurrentPath: (currentPath: string) => void
  setMenuOpen: () => void
  setMenuClose: () => void
  toggleMenu: () => void
}

interface NavItemsStoreProps {
  state: NavItemsState
  actions: ActionsProps
}

export const useNavItemsStore = create<NavItemsStoreProps>((set) => ({
  state: {
    navItems: [],
    isOpen: false,
    currentPath: '/',
  },
  actions: {
    adddNavItems: (navItems: NavItemProps[]) =>
      set((state) => ({
        state: {
          ...state.state,
          navItems: [...state.state.navItems, ...navItems],
        },
      })),
    setCurrentPath: (currentPath) =>
      set((state) => ({
        state: { ...state.state, currentPath },
      })),
    setMenuOpen: () =>
      set((state) => ({
        state: { ...state.state, isOpen: true },
      })),
    setMenuClose: () =>
      set((state) => ({
        state: { ...state.state, isOpen: false },
      })),
    toggleMenu: () =>
      set((state) => ({
        state: { ...state.state, isOpen: !state.state.isOpen },
      })),
  },
}))
