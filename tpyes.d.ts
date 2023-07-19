type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  BlogPost: BlogPost[];
};

type BlogPost = {
  id: string;
  title: string;
  content: string;
  author: User;
  authorId: string;
};
