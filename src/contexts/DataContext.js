import React, { useState } from "react";

const DataContext = React.createContext();

export const DataStore = (props) => {
	// Date initialization
	const currentDate = new Date();
	const hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const isAM = hours < 12;

	// States
	const [title, setTitle] = useState();
	const [date, setDate] = useState(currentDate);
	const [time, setTimeState] = useState(`${isAM ? hours : hours - 12}:${minutes} ${isAM ? "AM" : "PM"}`);
	const [purpose, setPurpose] = useState();
	const [items, setItems] = useState([]);

	// Methods
	const addItem = () =>
		setItems([
			...items,
			{
				topic: "New Topic",
				details: "Details of the topic",
			},
		]);

	const removeItem = (index) => {
		const array = items;
		array.splice(index, 1);
		console.log(array);
		setItems([...array]);
	};

	const setTime = (value) => {
		const hours = value.split(":")[0];
		const minutes = value.split(":")[0];
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
