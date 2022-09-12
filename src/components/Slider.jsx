import React from 'react'
import Styled from 'styled-components'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Container = Styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f5fbfd;
`
const Arrow = Styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left:  ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  margin: auto;
  opacity: 0.5;
`;

const Wrapper = Styled.div`
	  height: 100%;
`;

const Slide = Styled.div``;
const ImgContainer = Styled.div``;
const InfoContainer = Styled.div``;

const Slider = () => {
  return (
	<Container>
		<Arrow direction="left" >
			<KeyboardArrowLeftIcon/>
		</Arrow>
		<Wrapper>
			<img src="https://i.ibb.co/S6qMxwr/1.png" alt="" />
		</Wrapper>
		<Arrow direction="right">
			<KeyboardArrowRightIcon/>
		</Arrow>
	</Container>
  )
}

export default Slider