import React from 'react';
import { ColumnContainer, ColumnTitle } from './styles';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContext';
import { Card } from './Card';
interface ColumnPros {
	text?: string;
	index: number;
}

export const Column = ({ text, index }: ColumnPros) => {
	const { state } = useAppState();
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			{state.lists[index].tasks.map((task) => (
				<Card text={task.text} key={task.id} />
			))}
			<AddNewItem
				toggleButtonText="+ Add another task"
				onAdd={console.log}
				dark
			/>
		</ColumnContainer>
	);
};
