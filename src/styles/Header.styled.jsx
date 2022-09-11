import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 8vh;
  background-color: ${({ theme }) => theme.colors.white};
  padding-block: 1.5rem;
  border-bottom: .5px solid gray;

  .header {
    &__main-wrapper {
        width: min(95%, 125rem);
        margin-inline: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
  }
  
`;

export default HeaderStyle;
