import React, { useContext, useState } from "react";
import axios from "axios";
import DataContext from "../contexts/DataContext";
import { downloadIcon } from "./icons";

const Preview = () => {
	const { title, purpose, date, time, items } = useContext(DataContext);
	const [canGenerate, setCanGenerate] = useState(true); // For avoiding spamming the download button

	const generatePDF = async () => {
		if (!canGenerate) return;

		setCanGenerate(false);

		axios
			.post("/generatePDF", {
				title,
				purpose,
				date,
				time,
				items,
			})
			.then((response) => {
				const url = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", "minutes.pdf");
				document.body.appendChild(link);
				link.click();
			});

		setTimeout(() => {
			setCanGenerate(true);
		}, 2000);
	};

	return (
		<div className="w-11/12 mt-4 md:w-8/12 md:mb-16 md:mt-14">
			<div className="flex flex-col h-full gap-2">
				<div className="flex items-end justify-between ">
					<h1 className="text-xl text-white drop-shadow-2xl">Live Preview</h1>
					<div
						className="py-1.5 px-6 bg-[#FF6F1E] rounded cursor-pointer text-white text-sm shadow-md scale-animation"
						onClick={generatePDF}
					>
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
			<h1 className="text-[16px] font-bold text-center">{title.length > 0 ? title : "Untitled"}</h1>

			{/* Date and time */}
			<div className="flex flex-col mt-2">
				<h1 className="text-[11px]">Date: {date.toDateString() ?? "Date goes here"}</h1>
				<h1 className="text-[11px]">Time: {time ?? "Time goes here"}</h1>
			</div>

			{/* Purpose */}
			<div className="mt-4 mb-2">
				<h1 className="font-semibold text-[12px]">Purpose of the meeting</h1>
				<h1 className="ml-2 text-[12px]">{purpose.length > 0 ? purpose : "Purpose unknown"}</h1>
			</div>

			{/* Items */}
			<ItemsPreview />
		</div>
	);
};

const ItemsPreview = () => {
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
