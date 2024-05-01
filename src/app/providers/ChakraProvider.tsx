// app/providers.tsx
'use client'

import { ChakraProvider ,extendTheme} from '@chakra-ui/react'
const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: '"Space Grotesk", sans-serif',
        backgroundColor: '#191616',
        backgroundImage: `
          radial-gradient(circle at center, rgba(255, 255, 255, 0.005) 0, rgba(255, 255, 255, 0.005) 1px, transparent 1px),
          linear-gradient(to right, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      },
    },
  },
});

export function ChakraProviderClient({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}