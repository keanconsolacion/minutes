import React from "react";
import { DataStore } from "../contexts/DataContext";
import Action from "./Action";
import Preview from "./Preview";

const App = () => {
	return (
		<DataStore>
			<div className="h-screen w-screen bg-[#3A4870] ">
				<h1 className="absolute bottom-0 left-0 m-4 font-medium text-white text-md drop-shadow-lg">Minutes by Ke'an</h1>
				<div className="flex w-full h-full">
					<div className="relative flex justify-center w-2/3 h-full">
						<Preview />
					</div>
					<div className="relative flex justify-center w-1/3 h-full">
						<Action />
					</div>
				</div>
			</div>
		</DataStore>
	);
};

export default App;
