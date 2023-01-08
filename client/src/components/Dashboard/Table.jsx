import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: "aa061f41-f8cb-4efc-92b8-1d6b940de28c",
      product: "CREMA CBD CORPORAL 39,9 x50GR",
      img: "https://res.cloudinary.com/debfwgutb/image/upload/v1672761810/Products/e5auqfqu97qovhsp5l8d.png",
      customer: "Natural Gift",
      date: "5 January",
      amount: 3550,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 	"be23b4a3-c323-4c30-8aaf-73b69ba9ad27",
      product: "ACEITE CBD SUBLINGUAL CON IMAGEN",
      img: 	"https://res.cloudinary.com/debfwgutb/image/upload/v1672761921/Products/cr0izkuehming7vd7coq.png",
      customer: "Natural Gift",
      date: "3 January",
      amount: 4200,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: "35fee721-b9e0-466b-84aa-eac9f71a32ae",
      product: 	"UP CBD NATURAL SLIM",
      img: "https://res.cloudinary.com/debfwgutb/image/upload/v1672761991/Products/kvuzqaq8sy9zitfwsuci.png",
      customer: "Natural Gift",
      date: "13 January",
      amount: 10900,
      method: "Online Payment",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
