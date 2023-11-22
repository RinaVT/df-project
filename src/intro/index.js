import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="like">&lt;3</div>
				{this.props.smile}
				<h6>{this.props.text}</h6>
			</div>
		)
	}
}

const emotions = [
	{smile: "=)", description: "Хэй!"},
	{smile: "0_o", description: "Ого..."},
	{smile: "^_^", description: "Няяя"},
	{smile: "=(", description: "Ууу.."}
]

ReactDOM.render(
	<div className="wrapper">
		{/* v1 */}
		<div className="card">=)</div>
		<div className="card">^_^</div>
		<div className="card">0_o</div>
		<div className="card">$_$</div>

		{/* v2 */}
		<Card smile="=)" text="Хэй!" />
		<Card smile="0_o" text="Ого..." />
		<Card smile="^_^" text="Няяя" />
		<Card smile="=(" text="Ууу.." />

		{/* v3 */}
		{emotions.map((el, i) => <Card smile={el.smile} text={el.description} key={i}/>)}
		{/* <div/>
		<img/> */}
	</div>,
	document.querySelector('#root')
)