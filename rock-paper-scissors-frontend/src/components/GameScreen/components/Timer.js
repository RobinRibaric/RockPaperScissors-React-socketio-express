import React, { useState, useEffect } from "react";

import "./Timer.css";

const Timer = ({ setMode, mode }) => {
	const [seconds, setSeconds] = useState(3);


	useEffect(() => {
		let interval = null;
		if (mode === 'time') {
			interval = setInterval(() => {

				setSeconds(seconds => seconds - 1);

				if (seconds === 0) {

					clearInterval(interval);
					setSeconds(3);
					setMode("fight");
				}
			}, 1000);
		} else if (mode !== 'time' && seconds !== 0) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [mode, seconds]);

	return (
		<div className='app'>
			<div className='time'>{seconds}</div>
		</div>
	);
};

export default Timer;
