import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation loginUser ($email:String!,$password: String!){
    loginUser(email:$email, password:$password){
        token
        user{
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email:$email, password:$password){
        token
        user{
            _id
            username
            email
        }
    }
}
`;

export const SAVE_BOOK = gql`
mutation SaveBook($input: BookInput){
    saveBook(input:$input){
        _id
        username
        email
        bookCount
        savedBooks{
            bookId
            authors
            image
            link
            title
            description
        }
    }       
}
`;

export const DELETE_BOOK = gql`
mutation RemoveBook($input: BookInput){
    RemoveBook(input:$input){
        _id
        username
        email
        bookCount
        savedBooks{
            bookId
            authors
            image
            link
            title
            description
        }
    }       
}
`;