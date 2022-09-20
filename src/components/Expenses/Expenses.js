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

	const filteredExpenses = expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filteredChangeHadler}
				/>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
