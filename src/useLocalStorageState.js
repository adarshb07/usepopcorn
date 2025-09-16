import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
	const [value, setValue] = useState(function () {
		const storedValued = localStorage.getItem(key);
		return storedValued ? JSON.parse(storedValued) : initialState;
	});

	useEffect(
		function () {
			localStorage.setItem(key, JSON.stringify(value));
		},
		[value, key]
	);

	return [value, setValue];
}
