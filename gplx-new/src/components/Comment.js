"use client";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

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
  
function Comment() {
  

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'flex-end',width:'100%',marginTop:2,marginLeft:2}}>
      <Box component="img" sx={{height:55,width:55}} src="https://images.pexels.com/photos/3979134/pexels-photo-3979134.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=1"></Box>
        <TextField id="input-with-sx" label="Viết bình luận" variant="standard" style={{width:"100%",marginLeft:5}}/>
      </Box>
      <Box sx={{marginTop:5,marginLeft:2}}>
      {data.map((item)=>(
        <Box key={item.id} sx={{
          width: 1020}}>
            <Box sx={{display:'flex',flexDirection:'row',marginTop:1}}>
                <Box component="img" sx={{height:55,width:55}} src="https://images.pexels.com/photos/3979134/pexels-photo-3979134.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=1"></Box>
                <Box sx={{marginLeft:1}}>
                  <Typography sx={{fontSize:13,fontWeight:'bold',color:'blue'}}>Hải Nguyễn Nam</Typography>
                  <Typography sx={{fontSize:13}}>co nhung cau bam dk 5d. thi gay tai nan rui.hoc va ap dung theo nhu nay thi chet</Typography>
                  <Box sx={{display:'flex',flexDirection:'row'}}>
                  <Typography sx={{fontSize:11}}>Thích</Typography>
                  <Typography sx={{fontSize:11,marginLeft:1}}>Phản hồi</Typography>
                  <Typography sx={{fontSize:11,marginLeft:1}}>12 giờ</Typography>
                  </Box>
                </Box>
            </Box>
        </Box>      
      ))}
      </Box>
    </>
  );
}

export default Comment;
