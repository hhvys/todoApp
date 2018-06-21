import * as $ from 'jquery';
const SERVER_ADDRESS = "http://localhost:8081/";

const convertToJson = async(data) => data.json();

export const loadState = async () => {
	try {
		const response = await fetch(SERVER_ADDRESS);
		return await convertToJson(response);
	} catch(err) {
		console.log(err);
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		$.post(SERVER_ADDRESS, {payload: serializedState});
	}
	catch (err) {
		console.log("State is not serializable");
	}
};
