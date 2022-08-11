import React, { useState } from "react";

const DataContext = React.createContext();

export const DataStore = (props) => {
	// Date initialization
	const currentDate = new Date();
	const hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const isAM = hours < 12;

	// States
	const [title, setTitle] = useState("");
	const [date, setDateState] = useState(currentDate);
	const [time, setTimeState] = useState(`${isAM ? hours : hours - 12}:${minutes} ${isAM ? "AM" : "PM"}`);
	const [purpose, setPurpose] = useState("");
	const [items, setItems] = useState([]);

	// Methods
	const addItem = () =>
		setItems([
			...items,
			{
				topic: `Topic ${items.length}`,
				details: "Details",
			},
		]);

	const removeItem = (index) => {
		const array = items;
		array.splice(index, 1);
		setItems([...array]);
	};

	const setDate = (value) => {
		const date = new Date(value);
		setDateState(date);
	};

	const setTime = (value) => {
		const hours = value.split(":")[0];
		const minutes = value.split(":")[1];
		const isAM = hours < 12;
		setTimeState(`${isAM ? hours : hours - 12}:${minutes} ${isAM ? "AM" : "PM"}`);
	};

	return (
		<DataContext.Provider
			value={{
				title,
				date,
				time,
				purpose,
				items,
				setTitle,
				setDate,
				setTime,
				setPurpose,
				setItems,
				addItem,
				removeItem,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataContext;
