import { Badge } from "./ui/badge"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const AppliedJobTable = () => {
  return (
    <div className="overflow-x-auto mt-4">
  <Table className="min-w-full border border-gray-200">
    <TableCaption className="text-gray-600 text-sm text-left p-2">A list of your applied jobs</TableCaption>
    <TableHeader className="bg-gray-100">
      <TableRow>
        <TableHead className="text-gray-700 p-3">Date</TableHead>
        <TableHead className="text-gray-700 p-3">Job Role</TableHead>
        <TableHead className="text-gray-700 p-3">Company</TableHead>
        <TableHead className="text-gray-700 p-3">Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {[1, 2, 3, 4].map((item, index) => (
        <TableRow key={index} className="hover:bg-gray-50">
          <TableCell className="p-3 text-gray-700">04-12-24</TableCell>
          <TableCell className="p-3 text-gray-700">Frontend Developer</TableCell>
          <TableCell className="p-3 text-gray-700">Google</TableCell>
          <TableCell className="p-3">
            <Badge className="bg-green-100 text-green-700 px-2 py-1 rounded-md">Selected</Badge>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>
  )
}

export default AppliedJobTable
