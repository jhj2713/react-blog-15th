import type { NextPage } from "next";
import styled from "styled-components";
import PostList from "../components/mainPage/PostList";
import { useAppSelector } from "../hooks/useAppSelector";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const posts = useAppSelector((state) => state.post.posts);
  const router = useRouter();

  const handleRouting = (): void => {
    router.push(`/edit/${uuid()}`);
  };

  return (
    <Layout>
      <TitleContainer>
        <Text fontSize="2rem">BLOG</Text>
        <Text fontSize="1rem">{posts.length}개의 글</Text>
      </TitleContainer>
      <PostList />
      <ButtonContainer>
        <a onClick={handleRouting}>작성</a>
      </ButtonContainer>
    </Layout>
  );
};

export default Home;

const TitleContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  margin: 1rem 0rem;

  font-size: 2rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0rem 2rem;
`;

const Text = styled.div<{ fontSize: string }>`
  height: 100%;
  padding: 0rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize};
`;
