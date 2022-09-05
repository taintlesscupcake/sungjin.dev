export default function Project(props : any) {
  return (
    <a className="flex flex-col pr-8" href={props.link} target="_blank">
      <h2 className="text-gray-700 dark:text-gray-200 mb-4">
        <img src={props.img} width={200} height={200}  />
      </h2>
    </a>
  );
}
