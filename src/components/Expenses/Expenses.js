import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
	return (
		<Card className="expenses">
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
	);
};

export default Expenses;
