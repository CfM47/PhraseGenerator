type Props = {
  message: string
};

export default function MessageContainer(props: Props) {
  return (
    <>
      {
        props.message === ""? <></> :
        <div className="max-w-md space-y-6 py-4 text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 justify-start min-w-[90%] md:min-w-[30%] mb-3 ml-3 mr-3">
          <p className="font-inter mt-2 text-color1 dark:text-color1-dark ">
            {props.message}
          </p>
        </div>
      }
    </>
  );
}
