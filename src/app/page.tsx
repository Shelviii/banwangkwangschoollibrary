import { Box, CardHeader, Container, Stack } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BookIcon from "@mui/icons-material/Book";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Home() {
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
        <Card sx={{ maxWidth: 350, boxShadow: 3 }}>
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
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <BookIcon sx={{ fontSize: 60, color: "primary.main" }} />
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "text.main" }}
              fontSize={20}
              align="center"
            >
              ยินดีต้อนรับสู่ระบบลงชื่อเข้า-ออกห้องสมุดของเรา
            </Typography>
          </CardContent>
          <CardActions sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                mx: 2,
              }}
            >
              <Button
                variant="contained"
                href="signin"
                color="success"
                sx={{
                  width: "40%",
                  textAlign: "center",
                  py: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LoginIcon sx={{ mb: 1, fontSize: 30 }} />
                  ลงชื่อเข้าใช้ห้องสมุด
                </Box>
              </Button>
              <Button
                variant="contained"
                href="signout"
                color="error"
                sx={{
                  width: "40%",
                  textAlign: "center",
                  py: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LogoutIcon sx={{ mb: 1, fontSize: 30 }} />
                  ลงชื่อออกจากห้องสมุด
                </Box>
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
