import styled from "styled-components";


const StyledPlaylist = styled.div`
  overflow: hidden;
  flex: 1 1 450px;
  color: white;

  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
  

`

export default StyledPlaylist;

// you can add classes the same way as you do the media query. Espcially if you don't want to create a separate component for each class name ofc. 
