export interface IPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface IPostState {
  posts: IPost[];
}
