import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { InferGetStaticPropsType, GetStaticProps } from "next";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { deletePost } from "../../store/modules/post";
import { wrapper, getAllPostIds } from "../../store";
import { IPost } from "../../store/types";

import Layout from "../../components/Layout";

const Detail = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [post, setPost] = useState({
    id: "",
    title: "",
    content: "",
    date: "",
  });

  const storePosts = useAppSelector((state) => state.post.posts);
  posts = posts ? storePosts : posts;

  const handleDelete = (): void => {
    dispatch(deletePost(String(router.query.id)));
    router.push("/");
  };

  useEffect(() => {
    const idx = posts.findIndex((post: IPost) => post.id === router.query.id);
    if (idx !== -1) {
      setPost(posts[idx]);
    }
  }, []);

  return (
    <Layout>
      <Title>{post.title}</Title>
      <Date>{post.date}</Date>
      <Content>{post.content}</Content>
      <ButtonsBox>
        <Link href="/">
          <Button>목록</Button>
        </Link>
        <Link href={`/edit/${router.query.id}`}>
          <Button>수정</Button>
        </Link>
        <Button onClick={handleDelete}>삭제</Button>
      </ButtonsBox>
    </Layout>
  );
};

export default Detail;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => () => {
    const posts = store.getState().post.posts;
    return {
      props: { posts },
    };
  }
);

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

const Title = styled.div`
  width: 100%;
  margin: 1rem 0rem;
  padding: 0rem 2rem;

  font-size: 2rem;
  font-weight: bold;
`;
const Date = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  margin: 0rem 0rem 2rem 0rem;
  padding: 0rem 2rem;

  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.8);
`;
const Content = styled.section`
  width: 100%;
  height: 30rem;

  padding: 1rem 2rem;
  border-top: 0.01rem solid grey;
  overflow: auto;

  white-space: pre-line;
  line-height: 2rem;

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
const ButtonsBox = styled.section`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0rem 2rem;
`;
const Button = styled.a`
  margin-left: 1rem;
`;
