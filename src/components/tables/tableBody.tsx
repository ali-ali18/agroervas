import { TableBody, TableCell, TableRow } from "../ui/table";

interface TableBodyProps {
    items: {
        tableCell1: string;
        tableCell2: string;
    }[];
}


export default function TableBodyUi({ items }: TableBodyProps) {
    return (
        <TableBody className="w-full">
            {items.map((item) => (
                <TableRow className="w-auto" key={item.tableCell1}>
                    <TableCell className="">{item.tableCell1}</TableCell>
                    <TableCell className="">{item.tableCell2}</TableCell>
                </TableRow>
            ))}



        </TableBody>
    )
}
