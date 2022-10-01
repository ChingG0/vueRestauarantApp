import {apiHelper} from './../utils/helpers'
const getToken = () => localStorage.getItem("token")

export default{
  signIn({email, password}){
    return apiHelper.post('/signin',{
      email,
      password
    })
  },
  
  signUp (data) {
    return apiHelper.post('/signup', {...data})
  },

  get(){
    return apiHelper.get('/admin/users',{
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
    })
  }
}