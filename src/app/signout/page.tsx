"use client";
import { Box, CardHeader, Container, Stack } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra"; 
import "dayjs/locale/th";
import SaveIcon from '@mui/icons-material/Save';
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

dayjs.extend(buddhistEra); // ใช้งาน plugin
export default function SignOutPage() {
  const [studentClass, setStudentClass] = useState("");
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(dayjs());

  const studentClasses = [
    { value: "อนุบาลศึกษาปีที่ 2", label: "อนุบาลศึกษาปีที่ 2" },
    { value: "อนุบาลศึกษาปีที่ 3", label: "อนุบาลศึกษาปีที่ 3" },
    { value: "ประถมศึกษาปีที่ 1", label: "ประถมศึกษาปีที่ 1" },
    { value: "ประถมศึกษาปีที่ 2", label: "ประถมศึกษาปีที่ 2" },
    { value: "ประถมศึกษาปีที่ 3", label: "ประถมศึกษาปีที่ 3" },
    { value: "ประถมศึกษาปีที่ 4", label: "ประถมศึกษาปีที่ 4" },
    { value: "ประถมศึกษาปีที่ 5", label: "ประถมศึกษาปีที่ 5" },
    { value: "ประถมศึกษาปีที่ 6", label: "ประถมศึกษาปีที่ 6" },
    { value: "มัธยมศึกษาปีที่ 1", label: "มัธยมศึกษาปีที่ 1" },
    { value: "มัธยมศึกษาปีที่ 2", label: "มัธยมศึกษาปีที่ 2" },
    { value: "มัธยมศึกษาปีที่ 3", label: "มัธยมศึกษาปีที่ 3" },
  ];
  const handleChange = (event: SelectChangeEvent) => {
    setStudentClass(event.target.value as string);
  };


  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: 450 }}>
          <CardHeader
            sx={{
              backgroundColor: "primary.main",
              color: "#fff",
              py: 2,
            }}
            title={
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <LibraryBooksIcon sx={{ color: "inherit" }} />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                  bgcolor=""
                >
                  ระบบลงชื่อเข้า-ออกห้องสมุด
                </Typography>
              </Stack>
            }
          ></CardHeader>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
              <Button
                href="/"
                startIcon={<ArrowBackIcon />}
                sx={{ textTransform: "none", color: "primary.main" }}
              >
                กลับ
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <LogoutIcon sx={{ fontSize: 40, color: "red", mb: 1 }} />
              <Typography
                variant="h6"
                align="center"
                sx={{ color: "text.primary", fontWeight: "bold" }}
              >
                ลงชื่อออกจากห้องสมุด
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#e5e1e1",
                borderRadius: 4,
                my: 2,
                py: 2,
              }}
            >
              <TextField
                id="standard-basic"
                label="เลขประจำตัวนักเรียน"
                variant="standard"
                sx={{ mb: 2, width: "80%" }}
              />
              <TextField
                id="standard-basic"
                label="ชื่อ-นามสกุล"
                variant="standard"
                sx={{ mb: 2, width: "80%" }}
              />
              <FormControl variant="standard" sx={{ mb: 2, width: "80%" }}>
                <InputLabel id="demo-simple-select-label">
                  ระดับชั้นการศึกษา
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={studentClass}
                  label="ระดับชั้นการศึกษา"
                  onChange={handleChange}
                >
                  {studentClasses.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="th"
              >
                <Box
                  sx={{
                    backgroundColor: "#e5e1e1",
                    borderRadius: 3,
                    p: 3,
                    width: "100%",
                    maxWidth: 400,
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                  }}
                >
                  <DatePicker
                    label="วันที่"
                    value={date}
                    onChange={(newValue) => {
                      if (newValue !== null) {
                        setDate(newValue);
                      }
                    }}
                  />
                  <TimePicker
                    label="เวลา"
                    ampm={false}
                    value={time}
                    onChange={(newValue) => {
                      if (newValue !== null) {
                        setTime(newValue);
                      }
                    }}
                  />
                </Box>
              </LocalizationProvider>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Button
                variant="contained"
                color="success"
                startIcon={<SaveIcon />}
                sx={{ width: "50%", mb: 2 }}
              >
                บันทึก
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
