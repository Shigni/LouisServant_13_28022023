import styled from 'styled-components';

export function Button({
  type,
  text,
  fullWidth = false,
  center = false,
  handleClick,
}) {
  return (
    <StyledButton
      type={type}
      fullWidth={fullWidth}
      center={center}
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: block;
  margin: 0;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  background: #00935d;
  cursor: pointer;
  transition: all 300ms;
  ${(props) =>
    props.fullWidth
      ? `
        width: 100%;`
      : ``}
  ${(props) =>
    props.center
      ? `
        margin: 0 auto;`
      : ``}
  &:hover {
    background: #005834;
  }
`;
