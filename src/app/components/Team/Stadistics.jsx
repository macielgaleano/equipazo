import PlayerStat from "./PlayerStat";

export default function Stadistics(props) {
  return (
    <div className="w-full max-w-md p-4 m-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {props.estadistica}
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Top 5
        </a>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {props.playersData.map((player, index) => {
            return (
              <li className="py-3 sm:py-4" key={index}>
                <PlayerStat player={player} estadistica={props.estadistica.toLowerCase()} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
