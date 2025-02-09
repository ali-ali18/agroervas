import { Table, TableHead, TableHeader, TableRow } from "../ui/table";
import TableBodyUi from "./tableBody";

export type typeTableProps = {
	tableCell1: string;
	tableCell2: string;
};
interface TablesProps {
	info1: string;
	info2: string;
	items: typeTableProps[];
}

export default function Tables({ info1, info2, items }: TablesProps) {
	return (
		<Table className="w-full">
			<TableHeader>
				<TableRow>
					<TableHead>{info1}</TableHead>
					<TableHead>{info2}</TableHead>
				</TableRow>
			</TableHeader>
			<TableBodyUi items={items} />
		</Table>
	);
}
