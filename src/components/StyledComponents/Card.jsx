import styled from 'styled-components';

const CardContainer = styled.div`
  border: 2px solid #393939;
  padding: 24px;
  border-radius: 6px;
  ${props => {
    return (
      props.$dark &&
      `
      background-color: black;
      color: white;
      border: none;
      `
    );
  }}
`;

export default function Card() {
  return (
    <CardContainer $dark>
      <h2>Styled Component</h2>
      <p>이것은 styled-components로 만든 카드입니다.</p>
    </CardContainer>
  );
}
