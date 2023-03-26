import React from 'react'
import { Button } from '../Button'
import * as C from './styles'

const CTA = () => {
  return (
    <C.CTAStyled>
        <C.Content>
            <C.Heading>Try our service now!</C.Heading>
            <C.Description>Everything you need to accept card payments and grow your business anywhere on the planet. </C.Description>
        </C.Content>
        <C.Container>
            <Button value='Get Started' />
        </C.Container>
    </C.CTAStyled>
  )
}

export default CTA