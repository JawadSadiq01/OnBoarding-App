type BookData = {
  _id: string;
  title: string;
  discountRate: number,
  price: number,
  coverImage: string,
  description: string
};

type IBookCard = {
  navigateFunction: () => void,
  item: BookData
}
type ISubComment = {
  image: string,
  title: string
  verified: boolean,
  message: string,
}
type ILoaderProps = {
  msg: string
}
export { BookData, IBookCard, ISubComment, ILoaderProps }