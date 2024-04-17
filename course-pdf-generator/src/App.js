import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import Box from "@mui/material/Box";
import ReactPDF from '@react-pdf/renderer';
import PDFGenerator from "./components/PDFGenerator";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
  });
  const [pdfData, setPDFData] =useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

 
  return (
    <div style={{ padding: "20px", margin: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          name="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="course-label">Course</InputLabel>
          <Select
            labelId="course-label"
            id="course"
            value={formData.course}
            name="Course"
            onChange={handleChange}
            label="Course"
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            <MenuItem value="BTech">BTech</MenuItem>
            <MenuItem value="MTech">MTech</MenuItem>
          </Select>
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 2,
          }}
        >
          <Button variant="contained" type="submit" color="primary">
            Submit
          </Button>
          <Button variant="contained" type="button" color="success">
          <PDFGenerator />
          </Button>
         
        </Box>
      </form>
      {pdfData}
    </div>
  );
}

export default App;
