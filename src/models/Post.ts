export default class Post {

  constructor(
    public id: string,
    public slug: string,
    public title: string,
    public body: string,
    public created_at: string
  ) {}
}