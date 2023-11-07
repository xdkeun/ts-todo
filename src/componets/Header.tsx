import styled from "styled-components";
interface LengthProps {
  length: number;
}

const Header: React.FC<LengthProps> = ({ length }) => {
  // 현재 날짜를 가져오는 부분
  const dateArray = new Date().toLocaleDateString("ko-kr").split(".");
  const date = dateArray[0] + "년" + dateArray[1] + "월" + dateArray[2] + "일";
  return (
    <Layout>
      <Small>
        {date}, 처리할 일 {length}건
      </Small>
      <strong>To-Do List</strong>
    </Layout>
  );
};

const Layout = styled.div`
  font-size: 40px;
  display: flex;
  flex-direction: column;
`;

const Small = styled.p`
  margin: 0;
  font-size: 15px;
  color: darkgray;
`;

export default Header;
