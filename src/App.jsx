import { React } from 'react'
import GlobalStyle from './styles';
import styled from 'styled-components'
import { Navbar } from './components/Navbar/index'

const AppStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
`

const Container = styled.div`
  background: var(--bg-main);
  width: ${props => props.maxBoxWidth ? 'var(--box-width-max)' : '100%'};
  padding-right: var(--padding-3);
  padding-left: var(--padding-3);
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      
      {/* Navbar */}
      <Container>
        <Container maxBoxWidth>
          <Navbar />
        </Container>
      </Container>

      {/* Hero */}
      <Container>
        <Container maxBoxWidth>

        </Container>
      </Container>

      {/* Main */}
      <Container>
        <Container maxBoxWidth>
          
        </Container>
      </Container>
    </AppStyled>
  )
}

export default App
