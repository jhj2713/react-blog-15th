import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;

const Wrapper = styled.div`
  height: 40rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 0rem;

  border-radius: 1rem;
  box-shadow: 0rem 0rem 3rem rgba(0, 0, 0, 0.1);
  background-color: white;
`;
