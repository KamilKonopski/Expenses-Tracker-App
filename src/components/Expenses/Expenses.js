import ExpenseItem from "../ExpenseItem/ExpenseItem";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
	return (
		<div className="expenses">
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
		</div>
	);
};

export default Expenses;
