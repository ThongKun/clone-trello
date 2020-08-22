import React from 'react';
import { ColumnContainer, ColumnTitle } from './styles';

interface ColumnPros {
	text?: string;
}

export const Column = ({
	text,
	children,
}: React.PropsWithChildren<ColumnPros>) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			{children}
		</ColumnContainer>
	);
};
