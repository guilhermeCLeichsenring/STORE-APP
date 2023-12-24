export class ProductDTO {
  id: number = 0;
  title: string = '';
  price: number = 0;
  discountPercentage: number = 0;
  category: string = '';
  thumbnail: string = '';

  constructor(
    id: number,
    title: string,
    price: number,
    discountPercentage: number,
    category: string,
    thumbnail: string
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.category = category;
    this.thumbnail = thumbnail;
  }
}
