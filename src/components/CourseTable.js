import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
    {
        "courseName":"Bury My Heart at Wounded Knee",
        "courseLocation":"55511",
        "courseContent":"I felt a great disturbance in the Force, as if millions of voices suddenly cried out in terror and were suddenly silenced.",
        "teacherId":53
     },
     {
        "courseName":"Infinite Jest",
        "courseLocation":"878",
        "courseContent":"Twice the pride, double the fall.",
        "teacherId":81
     },
];

export default function CourseTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Course Content</TableCell>
            <TableCell align="right">Course Location</TableCell>
            <TableCell align="right">Teacher ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.courses.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{row.courseName}</TableCell>
              <TableCell align="right">{row.courseContent}</TableCell>
              <TableCell align="right">{row.courseLocation}</TableCell>
              <TableCell align="right">{row.teacherId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
