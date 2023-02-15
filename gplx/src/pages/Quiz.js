"use client";
import Navbar from "@/components/Navbar";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Comment from "../components/Comment";
import Footer from "../components/Footer";
import { Container } from "@mui/system";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import SchoolIcon from "@mui/icons-material/School";
import NearMeIcon from "@mui/icons-material/NearMe";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PendingIcon from "@mui/icons-material/Pending";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FlagIcon from "@mui/icons-material/Flag";
import CheckIcon from "@mui/icons-material/Check";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
const data = [
  {
    id: 1,
    name: "Câu 1: ",
  },
  {
    id: 2,
    name: "Câu 2: ",
  },
  {
    id: 3,
    name: "Câu 3: ",
  },
  {
    id: 4,
    name: "Câu 4: ",
  },
  {
    id: 5,
    name: "Câu 5: ",
  },
  {
    id: 6,
    name: "Câu 6: ",
  },
  {
    id: 7,
    name: "Câu 7: ",
  },
  {
    id: 8,
    name: "Câu 8: ",
  },
  {
    id: 9,
    name: "Câu 9: ",
  },
  {
    id: 10,
    name: "Câu 10: ",
  },
];
const Question = ({ item }) => (
  <Box sx={{ display: "flex", flexDirection: "row" }}>
    <Box
      sx={{
        width: 125,
        borderBottomStyle: "solid",
        borderLeftStyle: "solid",
        borderWidth: "thin",
        height: 40,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontSize: 13, fontWeight: "bold", marginLeft: 1 }}>
        {item.name}
      </Typography>
    </Box>
    <Box
      sx={{
        width: 125,
        borderBottomStyle: "solid",
        borderRightStyle: "solid",
        borderLeftStyle: "solid",
        borderWidth: "thin",
        height: 40,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{ fontSize: 13, fontWeight: "bold", marginLeft: 1 }}
      ></Typography>
    </Box>
  </Box>
);
function Quiz() {
  return (
    <>
      <Navbar />
      <Container sx={{ display: "flex", flexDirection: "row", paddingTop: 2 }}>
        <Container sx={{ width: "70%" }}>
          <Box
            sx={{ width: "100%", height: 450, backgroundColor: "blue" }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                height: 35,
                width: 110,
                backgroundColor: "green",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
              }}
            >
              <AlarmOnIcon fontSize="small" />
              <Typography sx={{ fontSize: 13 }}>Bắt đầu thi</Typography>
            </Box>
            <Typography sx={{ fontSize: 13, marginTop: 1 }}>
              Học viên ấn phím space (dấu cách) trên bàn phím khi phát hiện tình
              huống nguy hiểm
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                height: 35,
                width: 95,
                backgroundColor: "green",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
              }}
            >
              <SchoolIcon fontSize="small" />
              <Typography sx={{ fontSize: 13, marginLeft: 1 }}>
                Ôn tập
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderTopStyle: "solid",
              borderWidth: "thin",
              color: "black",
              marginTop: 2,
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: 13 }}>
              Phương pháp chấm điểm cho một tình huống:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: 13 }}>
                + Trong mỗi tình huống có{" "}
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", fontSize: 13, marginLeft: 0.5 }}
              >
                02 mốc thời điểm 5đ và 0đ:
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 13 }}>
                5 điểm:{" "}
              </Typography>
              <Typography sx={{ fontSize: 13, marginLeft: 0.5 }}>
                thời điểm bắt đầu có dấu hiệu phát hiện ra tình huống nguy hiểm,
                lái xe cần xử lý.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 13 }}>
                0 điểm:{" "}
              </Typography>
              <Typography sx={{ fontSize: 13, marginLeft: 0.5 }}>
                mốc thời điểm mà xử lý từ thời điểm này vẫn xảy ra tai nạn
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: 13 }}>
                + Học viên lựa chọn được giữa 2 mốc này sẽ đạt mức điểm tương
                ứng từ
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", fontSize: 13, marginLeft: 0.5 }}
              >
                5-4-3-2-1 điểm
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: 13 }}>
                Như vậy, bài thi thử mô phỏng của bạn sẽ có 10 tình huống và
                điểm tối đa bạn có thể đạt là
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", fontSize: 13, marginLeft: 0.5 }}
              >
                50 điểm.
              </Typography>
            </Box>
            <Box
              sx={{
                height: 150,
                width: "100%",
                backgroundColor: "#fef1f1",
                borderRadius: 1,
                borderStyle: "dashed",
                color: "blue",
                marginTop: 2,
                paddingLeft: 2,
                paddingTop: 2,
              }}
            >
              <Typography
                sx={{ fontSize: 13, fontWeight: "bold", color: "black" }}
              >
                fb.com/groups/thimophong
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", marginTop: 1 }}>
                <Box
                  sx={{
                    height: 22,
                    width: 85,
                    backgroundColor: "blue",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 1,
                  }}
                >
                  <ThumbUpOffAltIcon fontSize="small" color="action" />
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: 11,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Theo giỏi
                  </Typography>
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: 11,
                      marginLeft: 0.5,
                      color: "white",
                    }}
                  >
                    0
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: 22,
                    width: 85,
                    backgroundColor: "blue",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 1,
                    marginLeft: 1,
                  }}
                >
                  <ThumbUpOffAltIcon fontSize="small" color="action" />
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: 11,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Chia sẻ
                  </Typography>
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: 11,
                      marginLeft: 0.5,
                      color: "white",
                    }}
                  >
                    0
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Comment/>
          <Box
            sx={{
              height: 210,
              width: "100%",
              boxShadow: "1px 2px 9px #F4AAB9",
              borderRadius: 1,
              backgroundColor: "#f2deeb",
              paddingTop: 2,
              marginTop:2
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CheckIcon fontSize="small" />
              <Typography sx={{ fontSize: 13, marginLeft: 1 }}>
                <strong>
                  Phần mềm thi thử mô phỏng 120 tình huống giao thông online{" "}
                </strong>{" "}
                của chúng tôi được phát triển dựa trên phần mềm offline do{" "}
                <strong>Tổng Cục Đường Bộ Việt Nam</strong> ban hành trước đó.
                Nhằm giúp học viên không có máy tính có thể học và ôn tập trực
                tiếp trên điện thoại, máy tính bảng hoặc máy tính có cấu hình
                yếu không đủ điều kiện tải phần mềm.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
              <CheckIcon fontSize="small" />
              <Typography sx={{ fontSize: 13, marginLeft: 1 }}>
                Đây là tổng hợp các tình huống với mục đích kiểm tra nhận thức,
                phản xạ trước các mối nguy hiểm khi tham gia giao thông. Đã có
                rất nhiều nước phát triển trên thế giới như Anh, Hà Lan, Úc áp
                dụng phần mềm này vào sát hạch cấp GPLX và mang lại hiệu quả rõ
                rệt trong việc giảm thiểu số vụ tai nạn giao thông.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
              <CheckIcon fontSize="small" />
              <Typography sx={{ fontSize: 13, marginLeft: 1 }}>
                Có thể học thuộc và nắm rõ{" "}
                <stong>120 tình huống mô phỏng </stong> này đồng nghĩa bạn sẽ
                vượt qua phần thi mô phỏng 1 cách dễ dàng, không cần lo lắng.
                Ngoài ra, bạn còn có thêm các kỹ năng phản xạ thực tế khi tham
                gia giao thông sau này.
              </Typography>
            </Box>
          </Box>
        </Container>
        <Container sx={{ width: "30%", height: 400 }}>
          <Box
            sx={{
              height: 150,
              width: 250,
              borderStyle: "solid",
              borderWidth: "thin",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: 1,
                paddingBottom: 1,
                borderBottomStyle: "solid",
                borderWidth: "thin",
              }}
            >
              <NearMeIcon fontSize="small" />
              <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                KẾT QUẢ
              </Typography>
            </Box>
            <Box
              sx={{
                borderTopStyle: "solid",
                borderWidth: "thin",
                marginTop: 2,
                paddingLeft: 2,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", color: "red" }}>
                <ViewModuleIcon fontSize="small" />
                <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                  Số tình huống :
                </Typography>
                <Typography
                  sx={{ fontSize: 13, fontWeight: "bold", color: "black" }}
                >
                  10
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  color: "red",
                  marginTop: 2,
                }}
              >
                <CheckBoxIcon fontSize="small" />
                <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                  Điểm:
                </Typography>
                <Typography
                  sx={{ fontSize: 13, fontWeight: "bold", color: "black" }}
                >
                  0
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  color: "red",
                  marginTop: 2,
                }}
              >
                <PendingIcon fontSize="small" />
                <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                  Đánh giá :
                </Typography>
                <Typography
                  sx={{ fontSize: 13, fontWeight: "bold", color: "black" }}
                >
                  10
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: 250, marginTop: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box
                sx={{
                  width: 125,
                  borderStyle: "solid",
                  borderWidth: "thin",
                  height: 40,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HelpOutlineIcon fontSize="small"></HelpOutlineIcon>
                <Typography
                  sx={{ fontSize: 13, fontWeight: "bold", marginLeft: 1 }}
                >
                  Câu hỏi
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 125,
                  borderBottomStyle: "solid",
                  borderTopStyle: "solid",
                  borderRightStyle: "solid",
                  borderWidth: "thin",
                  height: 40,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FlagIcon fontSize="small"></FlagIcon>
                <Typography
                  sx={{ fontSize: 13, fontWeight: "bold", marginLeft: 1 }}
                >
                  Gắn cờ
                </Typography>
              </Box>
            </Box>
            {data.map((item) => (
              <Question item={item} key={item.id}></Question>
            ))}
            <Box
              sx={{
                width: 250,
                height: 40,
                borderLeftStyle: "solid",
                borderBottomStyle: "solid",
                borderRightStyle: "solid",
                borderWidth: "thin",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: 13 }}>Đề thi:</Typography>
              <Typography
                sx={{ fontSize: 13, fontWeight: "bold", marginLeft: 0.5 }}
              >
                Đề ngẫu nhiên
              </Typography>
              <Box
                sx={{
                  height: 20,
                  width: 50,
                  backgroundColor: "green",
                  borderRadius: 1,
                  paddingTop: 1,
                  color: "white",
                  fontSize: 11,
                  marginLeft: 2,
                }}
              >
                Xem gợi ý
              </Box>
            </Box>
            <Typography sx={{ fontSize: 13, fontWeight: "bold", marginTop: 2 }}>
              CHỌN ĐỀ THI MÔ PHỎNG LÁI XE
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Array.from(Array(6)).map((_, index) => (
                  <Grid item md={4} key={index}>
                    <Box
                      sx={{
                        borderRadius: 1,
                        backgroundColor: "blue",
                        height: 30,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>Đề {index + 1}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Container>
      <Footer/>
    </>
  );
}

export default Quiz;
