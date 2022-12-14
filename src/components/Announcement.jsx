import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`

const Announcement = () => {
  return (
	<Container>
		Super Deal!! Free Shipping on Orders Over $50
	</Container>
  )
}

export default Announcement