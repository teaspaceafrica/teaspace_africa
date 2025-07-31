// iconMap.ts
import { IconType } from 'react-icons'
import { FaMusic, FaFilm, FaBook, FaGamepad, FaCamera, FaClock, FaEye } from 'react-icons/fa'
import { MdMovie } from 'react-icons/md'
import { IoTrendingUp } from 'react-icons/io5'

export const ICON_MAP = {
  FaMusic,
  FaFilm,
  FaBook,
  FaGamepad,
  FaCamera,
  MdMovie,
  IoTrendingUp,
  FaClock,
  FaEye,
} as const

export type IconName = keyof typeof ICON_MAP
