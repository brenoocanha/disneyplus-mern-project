type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  }
}

export default function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <h1>Genre: {genre} ID: {id}</h1>
  )
}
//38:20  https://www.youtube.com/watch?v=G6X6CnxBDI4&ab_channel=SonnySangha