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
  id?: Maybe<Scalars['ID']>;
  price: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addHouse?: Maybe<House>;
  deleteHouse?: Maybe<House>;
};


export type MutationAddHouseArgs = {
  description: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  price: Scalars['Int'];
};


export type MutationDeleteHouseArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  properties: Array<House>;
  property: House;
  users: Array<User>;
};


export type QueryPropertyArgs = {
  propertyId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  name: Scalars['String'];
};

export type PeopleQueryVariables = Exact<{ [key: string]: never; }>;


export type PeopleQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', name: string }> };

export type HousesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HousesQueryQuery = { __typename?: 'Query', properties: Array<{ __typename?: 'House', id?: string | null, description: string, price: number }> };

export type HouseQueryQueryVariables = Exact<{
  propertyId: Scalars['ID'];
}>;


export type HouseQueryQuery = { __typename?: 'Query', property: { __typename?: 'House', id?: string | null, description: string, price: number } };

export type AddHouseMutationMutationVariables = Exact<{
  description: Scalars['String'];
  price: Scalars['Int'];
}>;


export type AddHouseMutationMutation = { __typename?: 'Mutation', addHouse?: { __typename?: 'House', description: string, price: number } | null };


export const PeopleDocument = gql`
    query people {
  users {
    name
  }
}
    `;

/**
 * __usePeopleQuery__
 *
 * To run a query within a React component, call `usePeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeopleQuery({
 *   variables: {
 *   },
 * });
 */
export function usePeopleQuery(baseOptions?: Apollo.QueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
      }
export function usePeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
        }
export type PeopleQueryHookResult = ReturnType<typeof usePeopleQuery>;
export type PeopleLazyQueryHookResult = ReturnType<typeof usePeopleLazyQuery>;
export type PeopleQueryResult = Apollo.QueryResult<PeopleQuery, PeopleQueryVariables>;
export const HousesQueryDocument = gql`
    query HousesQuery {
  properties {
    id
    description
    price
  }
}
    `;

/**
 * __useHousesQueryQuery__
 *
 * To run a query within a React component, call `useHousesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useHousesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHousesQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useHousesQueryQuery(baseOptions?: Apollo.QueryHookOptions<HousesQueryQuery, HousesQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HousesQueryQuery, HousesQueryQueryVariables>(HousesQueryDocument, options);
      }
export function useHousesQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HousesQueryQuery, HousesQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HousesQueryQuery, HousesQueryQueryVariables>(HousesQueryDocument, options);
        }
export type HousesQueryQueryHookResult = ReturnType<typeof useHousesQueryQuery>;
export type HousesQueryLazyQueryHookResult = ReturnType<typeof useHousesQueryLazyQuery>;
export type HousesQueryQueryResult = Apollo.QueryResult<HousesQueryQuery, HousesQueryQueryVariables>;
export const HouseQueryDocument = gql`
    query HouseQuery($propertyId: ID!) {
  property(propertyId: $propertyId) {
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
 *      propertyId: // value for 'propertyId'
 *   },
 * });
 */
export function useHouseQueryQuery(baseOptions: Apollo.QueryHookOptions<HouseQueryQuery, HouseQueryQueryVariables>) {
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
    mutation AddHouseMutation($description: String!, $price: Int!) {
  addHouse(description: $description, price: $price) {
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