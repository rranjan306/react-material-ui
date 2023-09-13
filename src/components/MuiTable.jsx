import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material"

//url: https://www.mockaroo.com/
const MuiTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>IP Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData.map((item) => (
              <TableRow key={item.id}>
                 <TableCell>{item.id}</TableCell>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.ip_address}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

<div>
  <div class="flex-item">Item1 </div>
  <div class="flex-item">Item2 </div>
  <div class="flex-item">Item3 </div>
  <div class="flex-item">Item4 </div>
  <div class="flex-item">Item5 </div>
  <div class="flex-item">Item6 </div>
</div>

const tableData = [{
  "id": 1,
  "first_name": "Caril",
  "last_name": "Loges",
  "email": "cloges0@ning.com",
  "gender": "Female",
  "ip_address": "63.141.222.45"
}, {
  "id": 2,
  "first_name": "Agustin",
  "last_name": "Dyet",
  "email": "adyet1@cbsnews.com",
  "gender": "Male",
  "ip_address": "135.79.173.110"
}, {
  "id": 3,
  "first_name": "Reinaldos",
  "last_name": "D'eathe",
  "email": "rdeathe2@spiegel.de",
  "gender": "Male",
  "ip_address": "11.195.121.65"
}, {
  "id": 4,
  "first_name": "Valentino",
  "last_name": "Fairey",
  "email": "vfairey3@illinois.edu",
  "gender": "Male",
  "ip_address": "157.55.107.152"
}, {
  "id": 5,
  "first_name": "Kelly",
  "last_name": "Enevold",
  "email": "kenevold4@admin.ch",
  "gender": "Male",
  "ip_address": "247.242.43.152"
}, {
  "id": 6,
  "first_name": "Garek",
  "last_name": "Ullyott",
  "email": "gullyott5@who.int",
  "gender": "Male",
  "ip_address": "125.203.219.159"
}, {
  "id": 7,
  "first_name": "Anni",
  "last_name": "Hardistry",
  "email": "ahardistry6@woothemes.com",
  "gender": "Female",
  "ip_address": "21.187.219.212"
}, {
  "id": 8,
  "first_name": "Davina",
  "last_name": "Lewerenz",
  "email": "dlewerenz7@techcrunch.com",
  "gender": "Female",
  "ip_address": "194.142.162.108"
}, {
  "id": 9,
  "first_name": "Layla",
  "last_name": "Mongenot",
  "email": "lmongenot8@wix.com",
  "gender": "Female",
  "ip_address": "34.42.55.195"
}, {
  "id": 10,
  "first_name": "Guglielmo",
  "last_name": "Zarb",
  "email": "gzarb9@a8.net",
  "gender": "Male",
  "ip_address": "149.110.71.92"
}]


export default MuiTable
