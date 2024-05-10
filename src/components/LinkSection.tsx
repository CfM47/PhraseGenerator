import LinkButton from "./LinkButton";

type Props = {};

export default function LinkSection({}: Props) {
  return (
    <>
      <LinkButton link="/" text="Home"></LinkButton>
      <LinkButton link="/generate" text="Generate"></LinkButton>
      <LinkButton link="/favorites" text="Favorites"></LinkButton>
    </>
  );
}
