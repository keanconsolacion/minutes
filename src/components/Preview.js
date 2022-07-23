import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";
import { downloadIcon } from "./icons";

const Preview = () => {
	return (
		<div className="w-8/12 mb-16 mt-14">
			<div className="flex flex-col h-full gap-2">
				<div className="flex items-end justify-between ">
					<h1 className="text-lg text-white drop-shadow-2xl">Live Preview</h1>
					<div className="py-1.5 px-6 bg-[#FF6F1E] rounded cursor-pointer text-white text-sm shadow-md scale-animation">
						Download as PDF
						{downloadIcon}
					</div>
				</div>
				<div className="bg-white aspect-[1:1.4142] h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.45)] overflow-scroll">
					<div className="px-8 py-12">
						<Body />
					</div>
				</div>
			</div>
		</div>
	);
};

const Body = () => {
	const { title, purpose, date, time } = useContext(DataContext);

	return (
		<div className="flex flex-col h-[200px] text-sm">
			{/* Title */}
			<h1 className="text-[16px] font-bold">{title ?? "Title goes here"}</h1>

			{/* Date and time */}
			<div className="flex gap-2 mt-4">
				<h1 className="font-semibold text-[12px]">{date.toDateString() ?? "Date goes here"}</h1>
				<h1 className="font-semibold text-[12px]">{time ?? "Time goes here"}</h1>
			</div>

			{/* Purpose */}
			<div className="mt-4">
				<h1 className="font-semibold text-[12px]">Purpose of the meeting</h1>
				<h1 className="ml-2 text-[12px]">{purpose ?? "Purpose of the meeting goes here"}</h1>
			</div>

			{/* Items */}
			<ItemPreviews />
		</div>
	);
};

const ItemPreviews = () => {
	const { items } = useContext(DataContext);

	return items.map((item, index) => {
		return (
			<div className="mt-2" key={index}>
				<h1 className="text-[12px] font-semibold">{item.topic}</h1>
				<h1 className="text-[12px] ml-2">{item.details}</h1>
			</div>
		);
	});
};

export default Preview;
