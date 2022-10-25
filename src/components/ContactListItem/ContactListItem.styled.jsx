import styled from '@emotion/styled';

export const ContactListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactListButton = styled.button`
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  border-color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.primary};
  }
`;
