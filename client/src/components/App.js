import React from "react";
import { DataStore } from "../contexts/DataContext";
import Action from "./Action";
import Preview from "./Preview";

const App = () => {
	return (
		<DataStore>
			<div className="h-screen w-screen bg-[#3A4870] ">
				<h1 className="absolute bottom-0 left-0 m-4 font-medium text-white text-md drop-shadow-lg">Minutes by Ke'an</h1>

				<div className="flex flex-col w-full h-full md:flex-row">
					<div className="relative flex justify-center md:h-full md:w-2/3">
						<Preview />
					</div>

					<div className="relative flex justify-center w-full h-full md:w-1/3">
						<Action />
					</div>
				</div>
			</div>
		</DataStore>
	);
};

export default App;
