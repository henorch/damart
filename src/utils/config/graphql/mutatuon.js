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
  mutation CREATE_USER($input: createNewInput){
    createNewUser(input: $input) {
        success
        errors,
        emailError
    }
}
`

export const CREATE_ORDER = gql`
    mutation create_order($customerName: String, 
      $products: [productInput], 
      $status: String, 
      $orderDate: String, 
      $delivery: [deliveryInput]){
        createOrder(customerName: $customerName, products: $products,
        status: $status,
        delivery: $delivery) {
          customerName
          products {
            name
            price
            quantity
          },
          delivery {
            address
            collector_name
            telephone
          }
          status
        }
      }
  `