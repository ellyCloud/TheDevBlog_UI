export interface AddPostRequest {
  title: string | undefined;
  content: string | undefined;
  summary: string | undefined;
  urlHandle: string | undefined;
  author: string | undefined,
  visible: boolean | undefined;
  publishedDate: string | undefined;
  updatedDate: string | undefined;
  featuredImageUrl: string | undefined;
}
