import styled from 'styled-components';

export const Suffix = styled.div`
  transition: all 0.5s ease;
  visibility: visible;
  opacity: 1;

  ${(props) => !props.isOpen && 'opacity: 0; visibility: hidden'};
`;
