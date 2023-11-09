import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type House = {
  __typename?: 'House';
  description: Scalars['String'];
  id: Scalars['ID'];
  price: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addHouse?: Maybe<House>;
  deleteHouse?: Maybe<House>;
};


export type MutationAddHouseArgs = {
  description: Scalars['String'];
  id: Scalars['ID'];
  price: Scalars['Int'];
};


export type MutationDeleteHouseArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  property: Array<House>;
  user: Array<User>;
};

export type User = {
  __typename?: 'User';
  name: Scalars['String'];
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', user: Array<{ __typename?: 'User', name: string }> };

export type HouseQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HouseQueryQuery = { __typename?: 'Query', property: Array<{ __typename?: 'House', id: string, description: string, price: number }> };

export type AddHouseMutationMutationVariables = Exact<{
  id: Scalars['ID'];
  description: Scalars['String'];
  price: Scalars['Int'];
}>;


export type AddHouseMutationMutation = { __typename?: 'Mutation', addHouse?: { __typename?: 'House', id: string, description: string, price: number } | null };


export const CurrentUserDocument = gql`
    query currentUser {
  user {
    name
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const HouseQueryDocument = gql`
    query HouseQuery {
  property {
    id
    description
    price
  }
}
    `;

/**
 * __useHouseQueryQuery__
 *
 * To run a query within a React component, call `useHouseQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useHouseQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHouseQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useHouseQueryQuery(baseOptions?: Apollo.QueryHookOptions<HouseQueryQuery, HouseQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HouseQueryQuery, HouseQueryQueryVariables>(HouseQueryDocument, options);
      }
export function useHouseQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HouseQueryQuery, HouseQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HouseQueryQuery, HouseQueryQueryVariables>(HouseQueryDocument, options);
        }
export type HouseQueryQueryHookResult = ReturnType<typeof useHouseQueryQuery>;
export type HouseQueryLazyQueryHookResult = ReturnType<typeof useHouseQueryLazyQuery>;
export type HouseQueryQueryResult = Apollo.QueryResult<HouseQueryQuery, HouseQueryQueryVariables>;
export const AddHouseMutationDocument = gql`
    mutation AddHouseMutation($id: ID!, $description: String!, $price: Int!) {
  addHouse(id: $id, description: $description, price: $price) {
    id
    description
    price
  }
}
    `;
export type AddHouseMutationMutationFn = Apollo.MutationFunction<AddHouseMutationMutation, AddHouseMutationMutationVariables>;

/**
 * __useAddHouseMutationMutation__
 *
 * To run a mutation, you first call `useAddHouseMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddHouseMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addHouseMutationMutation, { data, loading, error }] = useAddHouseMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useAddHouseMutationMutation(baseOptions?: Apollo.MutationHookOptions<AddHouseMutationMutation, AddHouseMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddHouseMutationMutation, AddHouseMutationMutationVariables>(AddHouseMutationDocument, options);
      }
export type AddHouseMutationMutationHookResult = ReturnType<typeof useAddHouseMutationMutation>;
export type AddHouseMutationMutationResult = Apollo.MutationResult<AddHouseMutationMutation>;
export type AddHouseMutationMutationOptions = Apollo.BaseMutationOptions<AddHouseMutationMutation, AddHouseMutationMutationVariables>;