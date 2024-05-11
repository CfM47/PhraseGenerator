import Button from "./Button";
import getVariations from "../Services/getVariations";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  setPhrases: React.Dispatch<React.SetStateAction<string[]>>;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

interface IFormInput {
  prompt: string;
}

export default function PromptForm(props: Props) {
  const [fetching, setFetching] = useState(false);
  const {handleSubmit, register, formState: { errors }} = useForm<IFormInput>();

  useEffect(() => {
    props.setMessage(errors.prompt?.message || "");
  }, [errors.prompt?.message])
  

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    try {
      setFetching(true);
      const result = await getVariations(data.prompt);
      props.setPrompt(data.prompt);
      props.setPhrases(result.similar_phrases);
      props.setMessage("");
    } catch (e) {
      console.error(e);
      setFetching(false);
      props.setPrompt("");
      props.setPhrases([]);
      props.setMessage("An error occurred while fetching variations : Please try again later.");
    } finally {
      setFetching(false);
    }
  };

  return (
    <div className="space-y-4">
      <form className="space-y-2 w-full" onSubmit={handleSubmit(onSubmit)}>
        <label
          className="font-inter text-color1 dark:text-color1-dark text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="phrase"
        >
          Enter a phrase
        </label>
        <input
          id="phrase"
          className="flex h-10 rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-color1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
          placeholder="Type your phrase here"
          {...register("prompt", {
            required: "Cannot generate variations from an empty phrase",
          })}
        ></input>
        <Button text="Generate" fetching={fetching} />
      </form>
    </div>
  );
}