
import { Box } from '@chakra-ui/react'
import React from 'react'
import { ResultDet } from '../components/Result/ResultDet'
import { ResultTotal } from '../components/Result/ResultTotal'
import TablaAnswer from '../components/Result/TableAnswer'

const Result=()=> {
  return (
     <Box bg='bg' h='100vh'>
  <ResultTotal/>
  <ResultDet/>
  <TablaAnswer/>
  </Box>
  )
}

export default Result