import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";
import { writeIcon, trashIcon } from "./icons";

const Item = ({ index }) => {
	const context = useContext(DataContext);

	return (
		<div className="flex flex-col items-start gap-1">
			<div className="flex justify-between w-full">
				<div>
					{writeIcon}
					<input
						className="ml-1 text-sm border-b-2"
						placeholder={"Topic"}
						value={context.items[index].topic}
						onChange={(e) => {
							const items = context.items;
							items[index].topic = e.target.value;
							context.setItems([...items]);
						}}
					/>
				</div>
				<button
					type="button"
					className="text-xs text-red-500 scale-animation"
					onClick={() => context.removeItem(index)}
				>
					{trashIcon}
				</button>
			</div>
			<textarea
				type="text"
				className="w-full p-1 text-sm border-2 border-solid rounded"
				value={context.items[index].details}
				placeholder="Details"
				onChange={(e) => {
					const items = context.items;
					items[index].details = e.target.value;
					context.setItems([...items]);
				}}
			/>
		</div>
	);
};

export default Item;
