import HttpClient from "../config/HttpClient";
import Post from "../models/Post";
import SlugService from "./SlugService";

export default class PostService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  public async getDetailsLatestPost(): Promise<Post> {
    const slugs = await new SlugService().getLatestSlug();

    const { data: post } = await this.httpClient.get<{
      id: string;
      slug: string;
      title: string;
      body: string;
      created_at: string;
    }>(
      `https://www.tabnews.com.br/api/v1/contents/AndersonVilela/${slugs.slug}`
    );
    return new Post(post.id, post.slug, post.title, post.body, post.created_at);
  }

  public async getOnlyPost(slug: string): Promise<Post> {
    const { data: post } = await this.httpClient.get<{
      id: string;
      slug: string;
      title: string;
      body: string;
      created_at: string;
    }>(`https://www.tabnews.com.br/api/v1/contents/AndersonVilela/${slug}`);
    return new Post(post.id, post.slug, post.title, post.body, post.created_at);
  }

}
