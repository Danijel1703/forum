import { Guid } from "typescript-guid";

interface TComment {
  id: Guid;
  userId: Guid;
  postId: Guid;
  content: string;
}

export default TComment;
