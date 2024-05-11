import { useEffect, useState } from "react";
import { AddPhrase, RemovePhrase } from "../utils/HandleFavorite";
import AddButton from "./AddButton";

type Props = {
  allowAdd?: boolean;
  item: string;
};

export default function FavoriteItem(props: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(false)
  }, [props.item])
  

  return (
    <div className="inline-flex items-end w-full">
      <li className="font-inter text-sm text-color1 dark:text-color1-dark py-1 flex-1">
        {props.item}
      </li>
      {props.allowAdd && (
        <AddButton
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          add={AddPhrase}
          remove={RemovePhrase}
          item={props.item}
        ></AddButton>
      )}
    </div>
  );
}
