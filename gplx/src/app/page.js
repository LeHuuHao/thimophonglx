"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "./page.module.css";
import Video from "../components/Video";
import Navbar from "../components/Navbar";
import Comment from "../components/Comment";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Container, Stack } from "@mui/system";
import SchoolIcon from "@mui/icons-material/School";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const data = [
  {
    id: 1,
    chapter: "Chương I:",
    content:
      "Gồm 29 tình huống từ 01 – 29 xoay quanh các tình huống thực tế thường xuyên gặp phải khi tham gia giao thông trên đường phố trong khu đô thị, khu dân cư đông đúc",
  },
  {
    id: 2,
    chapter: "Chương II:",
    content:
      "Gồm 14 tình huống từ 30 - 43 xoay quanh các tình huống thực tế thường xuyên gặp phải khi tham gia giao thông trên đường ở nông thôn ở các đoạn đường gấp khúc, vào buổi tối, có gia súc, sử dụng đèn chiếu xa,...",
  },
  {
    id: 3,
    chapter: "Chương III:",
    content:
      "Gồm 20 tình huống từ 44 - 63 xoay quanh các tình huống thực tế như chuyển làn, vượt xe, phanh gấp, nhập làn, lùi trên cao tốc,…thường xuyên gặp phải khi tham gia giao thông trên đường cao tốc.",
  },
  {
    id: 4,
    chapter: "Chương IV:",
    content:
      "Gồm 10 tình huống từ 64 - 73 xoay quanh các tình huống thực tế khi điều khiển tham gia giao thông trên đường núi như vượt xe, lên dốc xuống dốc, khúc cua gấp,...",
  },
  {
    id: 5,
    chapter: "Chương V:",
    content:
      "Gồm 17 tình huống từ 64 - 90 xoay quanh các tình huống thực tế điều khiển giao thông trên quốc lộ như người đi bộ, giao cắt với đường sắt, vượt xe trên đường…",
  },
  {
    id: 6,
    chapter: "Chương VI:",
    content:
      "Gồm 30 tình huống từ 91 - 120 xoay quanh các tình huống va chạm thực tế khi tham gia giao thông hỗn hợp.",
  },
];
const dataQuestion=[
  { id:1,
    name:'Chương 1: Giao thông trong đô thị',
    situation:[
      {
        id:1,
        name:'Tình huống số 1',
        content:'Người đi bộ sang đường khuất sau xe tải',
        url:'https://www.youtube.com/results?search_query=react+player+video'
      },
      {
        id:2,
        name:'Tình huống số 2',
        content:'Xe con xi nhan chuyển làn, có xe lớn đang...',
        url:'https://www.youtube.com/results?search_query=react+player+video'
      },
      {
        id:3,
        name:'Tình huống số 3',
        content:'Xe tải chở hàng thắng gấp, hàng rơi trên đư...',
        url:'https://www.youtube.com/results?search_query=react+player+video'
      },
      {
        id:4,
        name:'Tình huống số 4',
        content:'Xe lùi trên cao tốc',
        url:'https://www.youtube.com/results?search_query=react+player+video'
      }
    ]
  },
  { id:2,
    name:'Chương 2: Giao thông ngoài đô thị',
    situation:[
      {
        id:1,
        name:'Tình huống số 1',
        content:'Người đi bộ sang đường khuất sau xe tải',
        url:'https://www.youtube.com/results?search_query=react+player+video'
      },
      {
        id:2,
        name:'Tình huống số 2',
        content:'Xe con xi nhan chuyển làn, có xe lớn đang...',
        url:'https://www.youtube.com/results?search_query=react+player+video'
      },
      {
        id:3,
        name:'Tình huống số 3',
        content:'Xe tải chở hàng thắng gấp, hàng rơi trên đư...',
        url:'https://www.youtube.com/results?search_query=react+player+video'
      },
      {
        id:4,
        name:'Tình huống số 4',
        content:'Xe lùi trên cao tốc',
        url:'https://www.youtube.com/results?search_query=react+player+video'
      }
    ]
  },
  { id:3,
    name:'Chương 3: Giao thông trên cao tốc',
    situation:[
      {
        id:1,
        name:'Tình huống số 1',
        content:'Người đi bộ sang đường khuất sau xe tải',
        url:'https://www.youtube.com/results?search_query=react+player+video'
      },
      {
        id:2,
        name:'Tình huống số 2',
        content:'Xe con xi nhan chuyển làn, có xe lớn đang...',
        url:'https://www.youtube.com/results?search_query=react+player+video'
      },
      {
        id:3,
        name:'Tình huống số 3',
        content:'Xe tải chở hàng thắng gấp, hàng rơi trên đư...',
        url:'https://www.youtube.com/results?search_query=react+player+video'
      },
      {
        id:4,
        name:'Tình huống số 4',
        content:'Xe lùi trên cao tốc',
        url:'https://www.youtube.com/results?search_query=react+player+video'
      }
    ]
  },

]

export default function Home() {
  const Content = ({ item }) => (
    <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
      <Box
        sx={{
          height: 12,
          width: 12,
          backgroundColor: "black",
          borderRadius: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 0.5,
        }}
      >
        <Typography sx={{ color: "white", fontSize: 11 }}>{item.id}</Typography>
      </Box>
      <Box sx={{ fontSize: 13, fontWeight: "bold", marginLeft: 0.5 }}>
        {item.chapter}
        <Typography sx={{ fontSize: 13, marginLeft: 0.5 }}>
          {item.content}
        </Typography>
      </Box>
    </Box>
  );
  return (
    <Container >
      {/* <Navbar/> */}
      <Container
        sx={{ display: "flex", flexDirection: "row", paddingTop: 1 }}
        spacing={1}
      >
        <Stack spacing={2} sx={{ width: 300 }}>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {dataQuestion.map((item,index) => (
              <li key={index}>
                <ul>
                  <ListSubheader
                    sx={{ color: "black", backgroundColor: "#d8d6ee",fontSize:11,fontWeight:'bold'}}
                  >{item.name}</ListSubheader>
                  {(item.situation).map((value) => (
                    <ListItem key={value.id}>
                      {/* <ListItemText sx={{color: "black", backgroundColor: "#d8d6ee",fontSize:11,fontWeight:'bold'}}primary={`${value.name}`} /> */}
                      <ListItemText sx={{ backgroundColor: "#d8d6ee",paddingTop:2,paddingBottom:2,width:120}}>
                        <Typography sx={{color: "black",fontSize:11,fontWeight:'bold'}}>{`${value.name}`}</Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
          <Link href="/Quiz" style={{textDecoration:'none'}}>
          <Box
            sx={{
              width: 180,
              height: 40,
              display: "flex",
              flexDirection: "row",
              paddingTop: 1,
              justifyContent: "space-around",
              borderRadius: 1,
              backgroundColor: "green",
              "&:hover": {
                backgroundColor: "green",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <SchoolIcon />
            <Typography >Thi thử mô phỏng</Typography>
          </Box>
          </Link>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        </Stack>
        <Stack>
          <Video />
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: "bold",
              color: "red",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Học viên ấn phím space (dấu cách) trên bàn phím khi phát hiện tình
            huống nguy hiểm
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <ArrowBackIcon></ArrowBackIcon>
              <Typography sx={{ fontWeight: "bold" }}>Câu trước</Typography>
            </Box>
            <Typography>
              (Tình huống 1: Người đi bộ sang đường khuất sau xe tải)
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontWeight: "bold" }}>Câu sau</Typography>
              <ArrowForwardIcon></ArrowForwardIcon>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: 820,
              height: 30,
              backgroundColor: "#ffbb7e",
              borderRadius: 10,
              alignItems: "center",
              flexDirection: "row",
              marginTop:2
            }}
          >
            <Typography
              sx={{
                fontSize: 11,
                color: "black",
                fontWeight: "bold",
                marginLeft: 2,
              }}
            >
              Gợi ý:
            </Typography>
            <Typography sx={{ fontSize: 11, marginLeft: 1 }}>
              Ấn phím SPACE khi thấy người đi bộ xuất hiện sau đuôi xe tải. Đầu
              xe chạm xe con màu xám bên đường.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: 820,
              height: 30,
              backgroundColor: "#f4f7f8",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 1,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: 11 }}>Thời điểm gắn cờ:</Typography>
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: "bold",
                  color: "black",
                  marginLeft: 0.5,
                }}
              >
                0
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: 11 }}>Điểm đạt được:</Typography>
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: "bold",
                  color: "black",
                  marginLeft: 0.5,
                }}
              >
                0.0
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "green",
                width: 130,
                height: 25,
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "green",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
              <ContactSupportIcon
                fontSize="small"
                color="disabled"
              ></ContactSupportIcon>
              <Typography sx={{ fontSize: 11 }}>Xem hình ảnh gợi ý </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 13, marginTop: 1, fontWeight: "600" }}>
              Phương pháp chấm điểm cho một tình huống:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: 13, marginTop: 1 }}>
                + Trong mỗi tình huống có
              </Typography>
              <Typography
                sx={{
                  fontSize: 13,
                  marginTop: 1,
                  fontWeight: "600",
                  marginLeft: 0.5,
                }}
              >
                02 mốc thời điểm 5đ và 0đ:
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{ fontSize: 13, marginTop: 1, fontWeight: "600" }}
              >
                5 điểm:
              </Typography>
              <Typography sx={{ fontSize: 13, marginTop: 1, marginLeft: 0.5 }}>
                thời điểm bắt đầu có dấu hiệu phát hiện ra tình huống nguy hiểm,
                lái xe cần xử lý.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{ fontSize: 13, marginTop: 1, fontWeight: "600" }}
              >
                0 điểm:
              </Typography>
              <Typography sx={{ fontSize: 13, marginTop: 1, marginLeft: 0.5 }}>
                mốc thời điểm mà xử lý từ thời điểm này vẫn xảy ra tai nạn
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: 13, marginTop: 1 }}>
                + Học viên lựa chọn được giữa 2 mốc này sẽ đạt mức điểm tương
                ứng từ
              </Typography>
              <Typography
                sx={{
                  fontSize: 13,
                  marginTop: 1,
                  fontWeight: "600",
                  marginLeft: 0.5,
                }}
              >
                5-4-3-2-1 điểm
              </Typography>
            </Box>
            <Typography sx={{ fontSize: 13, marginTop: 1 }}>
              Như vậy, bài thi thử mô phỏng của bạn sẽ có 10 tình huống và điểm
              tối đa bạn có thể đạt là 50 điểm.
            </Typography>
          </Box>
        </Stack>
      </Container>
      <Box
        sx={{
          height: 120,
          width: 1020,
          color: "blue",
          borderStyle: "dashed",
          paddingLeft: 3,
          paddingRight: 3,
          paddingTop: 3,
          marginLeft:2,
          marginTop:2
        }}
      >
        <Typography sx={{ fontSize: 11, color: "black" }}>
          Nếu trong quá trình ôn tập, thi thử mô phỏng nếu bạn cảm thấy câu nào
          sai hãy góp ý bằng cách conment dưới phần bình luận nhé, Hoặc tham gia
          nhóm bên dưới để có thể được hỗ trợ nhanh nhất nhé ♥
        </Typography>
        <Typography sx={{ fontSize: 11, color: "black", marginTop: 1 }}>
          Nhóm: fb.com/groups/thimophong
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
      <Comment/>
      <Box sx={{marginTop:5}}>
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
          PHẦN MỀM ÔN TẬP MÔ PHỎNG 120 TÌNH HUỐNG GIAO THÔNG TRONG HỌC LÁI XE Ô
          TÔ
        </Typography>
        <Typography sx={{ fontSize: 13, marginTop: 1 }}>
          Phần mềm mô phỏng 120 tình huống giao thông được áp dụng vào chương
          trình dạy và học lái xe ô tô các hạng B1, B2, C, D, E, F… kể từ ngày
          15/06/2022. Dựa trên những bổ sung quan trọng của Tổng cục đường bộ
          Việt Nam, thimophong.net biên soạn và phát triển phần mềm thi thử mô
          phỏng 120 tình huống giao thông online
        </Typography>
        <Typography sx={{ fontSize: 13, marginTop: 2 }}>
          Phần mềm này mô phỏng lại các tình huống thực tế khi tham gia giao
          thông, trong đó cấu trúc nội dung được chia ra như sau:
        </Typography>
        {data.map((item) => (
          <Content key={item.id} item={item}></Content>
        ))}
      </Box>
      <Footer/>
    </Container>
  );
}
