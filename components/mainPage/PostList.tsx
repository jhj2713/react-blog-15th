import styled from "styled-components";
import Link from "next/link";
import { useAppSelector } from "../../hooks/useAppSelector";

const PostList = () => {
  const posts = useAppSelector((state) => state.post.posts);

  return (
    <ContentContainer>
      {posts.map((post) => (
        <Link key={post.id} href={`/detail/${post.id}`}>
          <ContentDiv>
            <ContentHeader>
              <Text fontSize="1rem">{post.title}</Text>
              <Text fontSize="0.8rem">{post.date}</Text>
            </ContentHeader>
            <ContentBody>
              <Text fontSize="0.9rem">{post.content}</Text>
            </ContentBody>
          </ContentDiv>
        </Link>
      ))}
    </ContentContainer>
  );
};

export default PostList;

const ContentContainer = styled.div`
  width: 100%;
  height: 30rem;
  overflow-y: scroll;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    width: 0.6rem;
  }

  & ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.08);
    visibility: hidden;
  }

  &:hover::-webkit-scrollbar-thumb {
    visibility: visible;
    border-radius: 1rem;
  }
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-top: 0.01rem solid grey;

  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const ContentHeader = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0rem 0.5rem 0rem;
`;

const ContentBody = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;

  margin: 0rem 0rem 1.5rem 0rem;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const Text = styled.div<{ fontSize: string }>`
  height: 100%;
  padding: 0rem 2rem;
  font-size: ${({ fontSize }) => fontSize};
`;
