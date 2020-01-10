import axios from '@/utils/myaxios.js'
// 登录接口
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
// 根据id去获取到用户的详情
export const getUserById = (id) => {
  return axios({
    url: `/user/${id}`
    // headers: { 'Authorization': localStorage.getItem('toutiao_41_token') }
  })
}
// 3. 更新个人信息
export const updateUserById = (id, data) => {
  return axios({
    method: 'post',
    url: `/user_update/${id}`,
    data
  })
}
// 4.实现用户的注册、后台是post的请求
export const register = (data) => {
  return axios({
    method: 'post',
    url: '/register',
    data
  })
}
// 5.关注用户
export const followUser = (id) => {
  return axios({
    url: `/user_follows/${id}`
  })
}
// 取消关注
export const unfollowUser = (id) => {
  return axios({
    url: `/user_unfollow/${id}`
  })
}
// 用户关注列表区域
export const getUserFollows = () => {
  return axios({
    url: `/user_follows`
  })
}
