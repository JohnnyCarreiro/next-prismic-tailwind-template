'use client'

import { FC, useRef } from 'react'
import { NavItemsState, useNavItemsStore } from './nav-items-store'

interface Props {
  state: NavItemsState
}

export const NavItemsClientStore: FC<Props> = ({ state }) => {
  const initialize = useRef(false)

  if (!initialize.current) {
    useNavItemsStore.setState({ state })
    initialize.current = true
  }
  return null
}
