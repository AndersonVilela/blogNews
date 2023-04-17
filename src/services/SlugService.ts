import HttpClient from "../config/HttpClient";
import Slug from "../models/Slug";
import Card from "../models/Card";

export default class SlugService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  public async getSlugs(): Promise<Slug[]> {
    return await this.httpClient
      .get<
        {
          slug: string;
          title: string;
        }[]
      >("https://www.tabnews.com.br/api/v1/contents/AndersonVilela")
      .then((response) => {
        return response.data
          .filter((slug) => slug.title)
          .map((slug) => {
            return new Slug(slug.slug);
          });
      });
  }

  public async getLatestSlug(): Promise<Slug> {
    const slugs = await this.getSlugs();
    return new Slug(slugs[0].slug);
  }

  public async getCards(): Promise<Card[]> {
    return await this.httpClient
      .get<
        {
          slug: string;
          title: string;
          created_at: string;
        }[]
      >("https://www.tabnews.com.br/api/v1/contents/AndersonVilela")
      .then((response) => {
        return response.data
          .filter((card) => card.title)
          .map((card) => {
            return new Card(
              card.slug, 
              card.title, 
              card.created_at);
          });
      });
  }

  public async getLatestCard(): Promise<Card> {
    const cards = await this.getCards();

    return new Card(cards[0].title, cards[0].slug, cards[0].created_at);
  }
}
