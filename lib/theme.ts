import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  sizes: {
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  
  components: {
    Link: {
      // 1. We can update the base styles
      baseStyle: {
        color: mode('black', 'red.100'),
        _hover:{
            color:'red.400'
        }
      }
    }
},
})

export default theme