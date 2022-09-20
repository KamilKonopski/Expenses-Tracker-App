import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from ".//ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState("2022");

	const filteredChangeHadler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChageFilter={filteredChangeHadler}
				/>
				{expenses.map((expense) => {
					return (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					);
				})}
			</Card>
		</div>
	);
};

export default Expenses;
