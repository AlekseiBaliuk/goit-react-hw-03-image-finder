import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 300px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
  padding: ${p => p.theme.space[4]}px;
`;

export const FilterTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const FilterInput = styled.input`
  width: 100%;
`;
