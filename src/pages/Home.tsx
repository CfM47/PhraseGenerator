import Titles from "../components/Titles";
import Results from "../components/Results";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <Titles></Titles>    
      <div className="max-w-md space-y-6 py-4 text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 justify-start min-w-[90%] md:min-w-[30%] mb-3 ml-3 mr-3">
        <p className='font-inter mt-2 text-color1 dark:text-color1-dark '>Just type a prompt and get 10 variations of your phrase. Here is an example!</p>
      </div>  
      <Results prompt="algo" results={["cosa 1", "cosa 2", "cosa 3"]}></Results>
    </div>
  );
}
