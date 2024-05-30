import httpInstance from "@/utils/http.js";


// 获取banner图片列表
export function getBannerAPI (){
  return httpInstance({
    url:'home/banner'
  })
}