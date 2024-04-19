import gql from "graphql-tag"

 
 
 
 export const LOGIN_USER = gql`
    mutation LOGINUSER($username: String!, $password: String!){
      loginUser(username: $username, password: $password) {
        token,
        user {
          email
          username
        }
      }
}
`


export const REG_USER = gql`
  mutation REGISTER($input: createNewInput){
    createNewUser(input: $input) {
      username,
      firstname,
      email
    }
}
`