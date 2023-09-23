import { Guid } from "typescript-guid";
import { TComment } from "..";

interface TPost {
  id: Guid;
  content: string;
  userId: Guid;
  comments: Array<TComment>;
}

export default TPost;
