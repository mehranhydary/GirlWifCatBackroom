'use client'

import { createGlobalStyle } from 'styled-components'
import localFont from 'next/font/local'

const aexir = localFont({
	src: './fonts/Aexir-XG3q9.otf',
	variable: '--font-aexir',
})

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${aexir.style.fontFamily};
  }
`
