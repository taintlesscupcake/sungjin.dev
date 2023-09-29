export default function Project(props: any) {
  return (
    <div className="bg-dark shadow-lg relative">
      <img src={props.img} width={300} height={300} />
      <a
        href={props.link}
        className="opacity-0 hover:opacity-100 hover:bg-white/70 flex flex-col absolute text-center top-0 items-center w-full h-full bg-dark justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="font-bold text-gray-800">{props.title}</div>
        <div className="text-gray-700 dark:text-gray-700 mt-1">
          {props.description}
        </div>
        <a
          href={props.example || "404"}
          target="_blank"
          className=" text-gray-500 underline mt-4"
          rel="noopener noreferrer"
        >
          Example
        </a>
      </a>
    </div>
  );
}
