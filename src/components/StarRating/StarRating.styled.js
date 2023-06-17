import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 8px;
`;

export const WrapperColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-flex;
  gap: 8px;
  width: ${p => (p.rating / 5) * 100}%;
  height: 100%;
  overflow: hidden;

  & svg {
    flex-shrink: 0;
  }
`;
