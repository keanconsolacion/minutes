import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";
import Item from "./Item"

const Action = () => {
	const context = useContext(DataContext);

	const renderItems = () => {
		return context.items.map((item, index) => {
			return <Item index={index} key={index} />;
		});
	};

	return (
		<div className="absolute overflow-scroll bg-white rounded shadow-2xl inset-4">
			<form className="flex flex-col gap-4 px-4 py-6 ">
				<h1 className="font-semibold text-center">Details</h1>

				{/* Title */}
				<div className="flex flex-col gap-1">
					<label className="text-sm">Title</label>
					<input
						type="text"
						className="p-1 text-sm border-2 border-solid rounded-sm"
						onChange={(e) => context.setTitle(e.target.value)}
						placeholder="Sprint 1 Meeting"
					/>
				</div>

				{/* Purpose of the meeting */}
				<div className="flex flex-col gap-1">
					<label className="text-sm ">Purpose of the meeting</label>
					<textarea
						type="text"
						className="p-1 text-sm border-2 border-solid rounded-sm"
						onChange={(e) => context.setPurpose(e.target.value)}
					/>
				</div>

				{/* Date and Time */}
				<div className="flex justify-between gap-1">
					<div>
						<label className="mr-2 text-sm">Date</label>
						<input
							type="date"
							className="p-1 text-sm border-2 border-solid rounded-sm"
							onChange={(e) => context.setDate(e.target.value)}
						/>
					</div>
					<div>
						<label className="mr-2 text-sm">Time</label>
						<input
							type="time"
							className="p-1 text-sm border-2 border-solid rounded-sm"
							onChange={(e) => context.setTime(e.target.value)}
						/>
					</div>
				</div>

				{/* Items */}
				{renderItems()}

				{/* Add Item Button */}
				<div className="flex flex-col items-center">
					<button
						type="button"
						className="bg-[#FF6F1E] px-4 py-1 rounded shadow-sm scale-animation cursor-pointer"
						onClick={() => context.addItem()}
					>
						<h1 className="text-sm font-semibold text-white">Add Item</h1>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Action;
