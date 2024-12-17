import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Transaction } from "@/types"

interface TransactionsTableProps {
  transactions: Transaction[]
  tableHeaders: Record<string, string>
}

export function TransactionsTable({ transactions, tableHeaders }: TransactionsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            {Object.keys(tableHeaders).map((header) => (
              <TableHead key={header} className="text-right">{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.companyName}</TableCell>
              <TableCell>{transaction.transactionDate}</TableCell>
              <TableCell>{transaction.transactionTime}</TableCell>
              <TableCell>{transaction.transactionNumber}</TableCell>
              <TableCell>{transaction.employeeName}</TableCell>
              <TableCell>{transaction.groupName}</TableCell>
              <TableCell>{transaction.businessName}</TableCell>
              <TableCell>{transaction.transactionType}</TableCell>
              <TableCell>₪{transaction.amountOwed.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}