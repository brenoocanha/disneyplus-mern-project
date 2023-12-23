import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  }
}

export default function SearchPage({ params: { term } }: Props) {
  if(!term) notFound();

  const termToUse = decodeURI(term);

  // API call to get the searched movies

  // API to get the popular movies

  return (
    <h1>{termToUse}</h1>
  )
}