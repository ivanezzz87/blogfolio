import React from 'react';
import styled from 'styled-components';
const TitleContainer = styled.div`
padding: 20px;
border-radius: 3px;
max-width: fit-content;
margin-top: 10px;
background-color: #fff;
`
const TitleContent = styled.h2`
color: #000;
`
const Title: React.FC = () => {
    return <TitleContainer>
        <TitleContent>SingIn</TitleContent>
    </TitleContainer>;
};
export default Title;