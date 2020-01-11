import axios from '@/utils/myaxios.js'
export const getPostList = (params) => {
  return axios({
    url: '/post',
    params
  })
}
// 文章的列表区域
export const getArticleById = (id) => {
  return axios({
    url: `/post/${id}`
  })
}
// 点赞与取消点赞区域
export const likeArticle = (id) => {
  return axios({
    url: `/post_like/${id}`
  })
}
// 收藏文章和取消文章区域
export const starArticle = (id) => {
  return axios({
    url: `/post_star/${id}`
  })
}
// 获取文章列表
export const getCommentList = (id, params) => {
  return axios({
    url: `/post_comment/${id}`,
    params
  })
}
