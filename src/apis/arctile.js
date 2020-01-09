import axios from '@/utils/myaxios.js'
export const getPostList = (params) => {
  return axios({
    url: '/post',
    params
  })
}
// 这个是文章的列表
export const getArticleById = (id) => {
  return axios({
    url: `/post/${id}`
  })
}
