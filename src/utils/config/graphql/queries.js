import gql from "graphql-tag"

export const GET_ALL_PRODUCT = gql`
    query ALL_PRODUCT {
        porducts{
            id,
            name,
            description,
            category,
            images,
            price
        }
    }
`