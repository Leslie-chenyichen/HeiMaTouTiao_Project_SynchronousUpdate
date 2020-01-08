/* 唉，请注意看好了：当前是cate.js---后台axios数据 */
// 引入的axios已经通通配置的基准路径
import axios from '@/utils/myaxios.js'

// 1.获取所有栏目数据
export const getCateList = () => {
  return axios({
    url: '/category'
  })
}
