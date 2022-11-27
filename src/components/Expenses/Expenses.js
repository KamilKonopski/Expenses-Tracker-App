import { useState } from "react";

import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

function Expenses({ expenses }) {
	const [filteredYear, setFilteredYear] = useState("2022");

	function filteredChangeHadler(selectedYear) {
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
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList filteredExpenses={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
