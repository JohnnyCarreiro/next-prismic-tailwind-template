'use client'

import { FC, useRef } from 'react'
import {
  useNavContactsStore,
  type NavContactsStore,
} from './nav-contacts-store'

interface Props {
  state: NavContactsStore['state']
}

export const NavContactsClientStore: FC<Props> = ({ state }) => {
  const initialize = useRef(false)

  if (!initialize.current) {
    useNavContactsStore.setState({ state })
    initialize.current = true
  }
  return null
}
