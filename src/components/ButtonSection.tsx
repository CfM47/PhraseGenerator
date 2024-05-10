import NavbarButton from "./NavbarButton"
import { AiOutlineHome } from "react-icons/ai";
import { RiAiGenerate } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";

type Props = {}

export default function ButtonSection({}: Props) {
  return (
    <>
      <NavbarButton link="/" icon={AiOutlineHome}></NavbarButton>
      <NavbarButton link="/generate" icon={RiAiGenerate}></NavbarButton>
      <NavbarButton link="/favorites" icon={MdFavoriteBorder}></NavbarButton>
    </>
  )
}