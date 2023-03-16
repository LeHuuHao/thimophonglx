"use client";
import Image from "next/image";
import { Typography, styled, Box, Stack, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckIcon from '@mui/icons-material/Check';
import Video from "../components/Video";

export default function Home() {
  const BoxS = styled(Stack)(({ theme }) => ({
    marginTop: "15%",
    [theme.breakpoints.up("lg")]: {
      marginTop: "6%",
      paddingLeft: "10rem",
      paddingRight: "10rem",
    },
  }));
  const TextContent = styled(Typography)({
    fontSize: 16,
    marginTop:2
  });
  const Stacks = styled(Stack)(({ theme }) => ({
    marginTop:5,
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  }));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
  }));
  const ItemHeader = styled(Paper)(({ theme }) => ({
    backgroundColor: "#63b3ed",
    color:'white',
    ...theme.typography.body2,
    fontWeight:'bold',
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  const array = Array.from(Array(100).keys());
  return (
    <>
      <BoxS>
        <TextContent>
          {" "}
          <strong>Ôn thi 120 tình huống mô phỏng lái xe</strong> {"  >>  "} Nhấn
          phím Cách (Space) để xác nhận, nhấn phím ↑　↓　→　← để chuyển câu.
        </TextContent>
        <Stacks>
          <Box flex={1}>
            <Grid container spacing={0.5}>
              <Grid item xs={6} >
                <ItemHeader>Xóa kết quả củ</ItemHeader>
              </Grid>
              <Grid item xs={6}>
                <ItemHeader>Thi thử</ItemHeader>
              </Grid>
              <Grid container spacing={0.5} sx={{marginTop:1}}>
              {array.map((item, index) => (
                <Grid item xs={2.4} key={index}>
                  <Item>{index+1}</Item>
                </Grid>
              ))}
              </Grid>
            </Grid>
          </Box>
          <Box flex={2} sx={{paddingLeft:2}}>
            <Typography><strong>Tình huống số 1:</strong> Người đi bộ sang đường khuất sau xe tải</Typography>
            <Video></Video>
          </Box>
        </Stacks>
        <Box sx={{marginTop:"20%"}}>
          <TextContent><strong>ÔN TẬP PHẦN MỀM MÔ PHỎNG 120 TÌNH HUỐNG GIAO THÔNG TRONG HỌC LÁI XE Ô TÔ</strong></TextContent>
          <TextContent>Phần mềm mô phỏng 120 tình huống giao thông được áp dụng vào chương trình dạy và học lái xe ô tô các hạng B1, B2, C, D, E, F… kể từ ngày 15/06/2022. Dựa trên những bổ sung quan trọng của Tổng cục đường bộ Việt Nam, KGO.LIFE biên soạn và phát triển phần mềm thi thử mô phỏng 120 tình huống giao thông online.</TextContent>
          <TextContent>Phần mềm này mô phỏng lại các tình huống thực tế khi tham gia giao thông, trong đó cấu trúc nội dung được chia ra như sau:</TextContent>
          <TextContent>Phần mềm này mô phỏng lại các tình huống thực tế khi tham gia giao thông, trong đó cấu trúc nội dung được chia ra như sau:</TextContent>
          <Typography ><FiberManualRecordIcon sx={{fontSize:10}}/><strong>{"   "}Chương I:</strong> Gồm 29 tình huống từ 01 – 29 xoay quanh các tình huống thực tế thường xuyên gặp phải khi tham gia giao thông trên đường phố trong khu đô thị, khu dân cư đông đúc</Typography>
          <TextContent><FiberManualRecordIcon sx={{fontSize:10}}/><strong>{"   "}Chương II:</strong>Gồm 14 tình huống từ 30 - 43 xoay quanh các tình huống thực tế thường xuyên gặp phải khi tham gia giao thông trên đường ở nông thôn ở các đoạn đường gấp khúc, vào buổi tối, có gia súc, sử dụng đèn chiếu xa,...</TextContent>
          <TextContent><FiberManualRecordIcon sx={{fontSize:10}}/><strong>{"   "}Chương III:</strong> Gồm 20 tình huống từ 44 - 63 xoay quanh các tình huống thực tế như chuyển làn, vượt xe, phanh gấp, nhập làn, lùi trên cao tốc,…thường xuyên gặp phải khi tham gia giao thông trên đường cao tốc.</TextContent>
          <TextContent><FiberManualRecordIcon sx={{fontSize:10}}/><strong>{"   "}Chương IV:</strong> Gồm 10 tình huống từ 64 - 73 xoay quanh các tình huống thực tế khi điều khiển tham gia giao thông trên đường núi như vượt xe, lên dốc xuống dốc, khúc cua gấp,...</TextContent>
          <TextContent><FiberManualRecordIcon sx={{fontSize:10}}/><strong>{"   "}Chương V:</strong> Gồm 17 tình huống từ 64 - 90 xoay quanh các tình huống thực tế điều khiển giao thông trên quốc lộ như người đi bộ, giao cắt với đường sắt, vượt xe trên đường</TextContent>
          <TextContent><FiberManualRecordIcon sx={{fontSize:10}}/><strong>{"   "}Chương VI:</strong>: Gồm 30 tình huống từ 91 - 120 xoay quanh các tình huống va chạm thực tế khi tham gia giao thông hỗn hợp.</TextContent>
          <TextContent>LƯU Ý.</TextContent>
          <TextContent><CheckIcon/>Phần mềm thi thử mô phỏng 120 tình huống giao thông online của chúng tôi được phát triển dựa trên phần mềm offline do Tổng Cục Đường Bộ Việt Nam ban hành trước đó. Nhằm giúp học viên không có máy tính có thể học và ôn tập trực tiếp trên điện thoại, máy tính bảng hoặc máy tính có cấu hình yếu không đủ điều kiện tải phần mềm.</TextContent>
          <TextContent><CheckIcon/>Đây là tổng hợp các tình huống với mục đích kiểm tra nhận thức, phản xạ trước các mối nguy hiểm khi tham gia giao thông. Đã có rất nhiều nước phát triển trên thế giới như Anh, Hà Lan, Úc áp dụng phần mềm này vào sát hạch cấp GPLX và mang lại hiệu quả rõ rệt trong việc giảm thiểu số vụ tai nạn giao thông.</TextContent>
          <TextContent><CheckIcon/>Đây là tổng hợp các tình huống với mục đích kiểm tra nhận thức, phản xạ trước các mối nguy hiểm khi tham gia giao thông. Đã có rất nhiều nước phát triển trên thế giới như Anh, Hà Lan, Úc áp dụng phần mềm này vào sát hạch cấp GPLX và mang lại hiệu quả rõ rệt trong việc giảm thiểu số vụ tai nạn giao thông.</TextContent>
          <TextContent>PHƯƠNG PHÁP CHẤM ĐIỂM</TextContent>
          <TextContent>Trong mỗi tình huống có 02 mốc thời điểm 5đ và 0đ:</TextContent>
          <TextContent> <strong>+ 5 điểm:</strong> thời điểm bắt đầu có dấu hiệu phát hiện ra tình huống nguy hiểm, lái xe cần xử lý.</TextContent>
          <TextContent><strong>+ 0 điểm:</strong> mốc thời điểm mà xử lý từ thời điểm này vẫn xảy ra tai nạn</TextContent>
          <TextContent>Học viên lựa chọn được giữa 2 mốc này sẽ đạt mức điểm tương ứng từ 5-4-3-2-1 điểm (điểm tối đa cho mỗi tình huống là 5đ).</TextContent>
          <TextContent><strong>Xem thêm:</strong> Mẹo giải phần mềm mô phỏng 120 tình huống giao thông</TextContent>
        </Box>
      </BoxS>
    </>
  );
}
