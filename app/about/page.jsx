import Link from "next/link";

//* bunu anlamı sayafa her hangi bir yere girince
//* o sayafasın titlesi o sayfasnın adını almasına yardımcı olır
//* çrnek hakkımızda sayfasında girince hakkımızda yazması gibi
export const metadata={
  title:'Hakkımızda'
}

export default function About() {
  return (
    <div>
      <h1>Hakkımızda</h1>
      <p>
        The Rick and Morty API is a REST(ish) and GraphQL API based on the
        television show Rick and Morty. You will have access to about hundreds
        of characters, images, locations and episodes. The Rick and Morty API is
        filled with canonical information as seen on the TV show.
      </p>
      <Link className="btn" href="/about/team">Takımımız</Link>
    </div>
  );
}