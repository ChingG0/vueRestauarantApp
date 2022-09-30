import {apiHelper} from './../utils/helpers'

export default{
  signIn({email, password}){
    return apiHelper.post('http://localhost:3000/api/signin',{
      email,
      password
    })
  }
}