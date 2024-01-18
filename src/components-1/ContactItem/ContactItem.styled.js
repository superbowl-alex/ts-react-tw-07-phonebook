import styled from '@emotion/styled';

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  border: ${p => p.theme.borders.none};
  padding: ${p => p.theme.space[0]}px;
  margin-right: ${p => p.theme.space[3]}px;
  cursor: pointer;
  transition: transform 250ms ease-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
    /* box-shadow: ${p => p.theme.shadows.middle}; */
  }

  & > svg {
    color: ${p => p.theme.colors.chestnut};
  }
`;
