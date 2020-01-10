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
// 这个是点赞与取消点赞
export const likeArticle = (id) => {
  return axios({
    url: `/post_like/${id}`
  })
}
// 这个是收藏文章和取消文章
export const starArticle = (id) => {
  return axios({
    url: `/star_like/${id}`
  })
}
