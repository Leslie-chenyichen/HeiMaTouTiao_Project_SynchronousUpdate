import axios from '@/utils/myaxios.js'
// 实现文件的上传
export const uploaFile = (data) => {
  return axios({
    method: 'post',
    url: '/upload',
    data
  })
}
