import Table from "react-bootstrap/Table";

export const Timetable = () => {
  return (
    <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td>Registration/Assembly</td>
          <td>8:40 am - 9:00 am</td>
        </tr>
        <tr>
          <td>Period 1</td>
          <td>8:40 am - 9:00 am</td>
        </tr>
        <tr>
          <td>Period 2</td>
          <td>9:50 am - 10:40 am</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10:40 am - 11:00 am</td>
        </tr>
        <tr>
          <td>Period 3</td>
          <td>11:00 am - 11:50 am</td>
        </tr>
        <tr>
          <td>Period 4</td>
          <td>11:50 am - 12:40 pm</td>
        </tr>
        <tr>
          <td>LUNCH</td>
          <td>12:40 pm - 1:40 pm</td>
        </tr>
        <tr>
          <td>Registration</td>
          <td>1:45 pm – 1:50 pm </td>
        </tr>
        <tr>
          <td>Period 5</td>
          <td>1:50 pm - 2:40 pm</td>
        </tr>
        <tr>
          <td>Period 6</td>
          <td>2:40 pm - 3:30 pm</td>
        </tr>
      </tbody>
    </Table>
  );
};
