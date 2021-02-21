import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<Todo_Mutation_Response>;
  /** delete single row from the table: "todo" */
  delete_todo_by_pk?: Maybe<Todo>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
};


/** mutation root */
export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _inc?: Maybe<Todo_Inc_Input>;
  _set?: Maybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _inc?: Maybe<Todo_Inc_Input>;
  _set?: Maybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};


/** query root */
export type Query_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};


/** subscription root */
export type Subscription_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['Int'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/**
 * holds todo tasks
 *
 *
 * columns and relationships of "todo"
 */
export type Todo = {
  __typename?: 'todo';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** true if task is completed, otherwise false */
  is_completed: Scalars['Boolean'];
  /** Title of the task */
  title: Scalars['String'];
};

/** aggregated selection of "todo" */
export type Todo_Aggregate = {
  __typename?: 'todo_aggregate';
  aggregate?: Maybe<Todo_Aggregate_Fields>;
  nodes: Array<Todo>;
};

/** aggregate fields of "todo" */
export type Todo_Aggregate_Fields = {
  __typename?: 'todo_aggregate_fields';
  avg?: Maybe<Todo_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Todo_Max_Fields>;
  min?: Maybe<Todo_Min_Fields>;
  stddev?: Maybe<Todo_Stddev_Fields>;
  stddev_pop?: Maybe<Todo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todo_Stddev_Samp_Fields>;
  sum?: Maybe<Todo_Sum_Fields>;
  var_pop?: Maybe<Todo_Var_Pop_Fields>;
  var_samp?: Maybe<Todo_Var_Samp_Fields>;
  variance?: Maybe<Todo_Variance_Fields>;
};


/** aggregate fields of "todo" */
export type Todo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todo" */
export type Todo_Aggregate_Order_By = {
  avg?: Maybe<Todo_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Todo_Max_Order_By>;
  min?: Maybe<Todo_Min_Order_By>;
  stddev?: Maybe<Todo_Stddev_Order_By>;
  stddev_pop?: Maybe<Todo_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Todo_Stddev_Samp_Order_By>;
  sum?: Maybe<Todo_Sum_Order_By>;
  var_pop?: Maybe<Todo_Var_Pop_Order_By>;
  var_samp?: Maybe<Todo_Var_Samp_Order_By>;
  variance?: Maybe<Todo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "todo" */
export type Todo_Arr_Rel_Insert_Input = {
  data: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** aggregate avg on columns */
export type Todo_Avg_Fields = {
  __typename?: 'todo_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "todo" */
export type Todo_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todo_Bool_Exp>>>;
  _not?: Maybe<Todo_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todo_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_completed?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint */
  TodoPkey = 'todo_pkey'
}

/** input type for incrementing integer column in table "todo" */
export type Todo_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  is_completed?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Todo_Max_Fields = {
  __typename?: 'todo_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "todo" */
export type Todo_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Todo_Min_Fields = {
  __typename?: 'todo_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "todo" */
export type Todo_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todo>;
};

/** input type for inserting object relation for remote table "todo" */
export type Todo_Obj_Rel_Insert_Input = {
  data: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};

/** on conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns: Array<Todo_Update_Column>;
  where?: Maybe<Todo_Bool_Exp>;
};

/** ordering options when selecting data from "todo" */
export type Todo_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_completed?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "todo" */
export type Todo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  is_completed?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Todo_Stddev_Fields = {
  __typename?: 'todo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "todo" */
export type Todo_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Todo_Stddev_Pop_Fields = {
  __typename?: 'todo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "todo" */
export type Todo_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Todo_Stddev_Samp_Fields = {
  __typename?: 'todo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "todo" */
export type Todo_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Todo_Sum_Fields = {
  __typename?: 'todo_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "todo" */
export type Todo_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Todo_Var_Pop_Fields = {
  __typename?: 'todo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "todo" */
export type Todo_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Todo_Var_Samp_Fields = {
  __typename?: 'todo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "todo" */
export type Todo_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Todo_Variance_Fields = {
  __typename?: 'todo_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "todo" */
export type Todo_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type InsertTodoMutationVariables = Exact<{
  object: Todo_Insert_Input;
}>;


export type InsertTodoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_todo_one?: Maybe<(
    { __typename?: 'todo' }
    & Pick<Todo, 'id'>
  )> }
);

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = (
  { __typename?: 'query_root' }
  & { todo: Array<(
    { __typename?: 'todo' }
    & Pick<Todo, 'id' | 'title' | 'is_completed' | 'created_at'>
  )> }
);

export type UpdateTodoByIdMutationVariables = Exact<{
  pk_columns: Todo_Pk_Columns_Input;
  _set?: Maybe<Todo_Set_Input>;
}>;


export type UpdateTodoByIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_todo_by_pk?: Maybe<(
    { __typename?: 'todo' }
    & Pick<Todo, 'id' | 'is_completed'>
  )> }
);

export const namedOperations = {
  Query: {
    Todos: 'Todos'
  },
  Mutation: {
    insertTodo: 'insertTodo',
    updateTodoById: 'updateTodoById'
  }
}

export const InsertTodoDocument = gql`
    mutation insertTodo($object: todo_insert_input!) {
  insert_todo_one(object: $object) {
    id
  }
}
    `;
export type InsertTodoMutationFn = Apollo.MutationFunction<InsertTodoMutation, InsertTodoMutationVariables>;

/**
 * __useInsertTodoMutation__
 *
 * To run a mutation, you first call `useInsertTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTodoMutation, { data, loading, error }] = useInsertTodoMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertTodoMutation(baseOptions?: Apollo.MutationHookOptions<InsertTodoMutation, InsertTodoMutationVariables>) {
        return Apollo.useMutation<InsertTodoMutation, InsertTodoMutationVariables>(InsertTodoDocument, baseOptions);
      }
export type InsertTodoMutationHookResult = ReturnType<typeof useInsertTodoMutation>;
export type InsertTodoMutationResult = Apollo.MutationResult<InsertTodoMutation>;
export type InsertTodoMutationOptions = Apollo.BaseMutationOptions<InsertTodoMutation, InsertTodoMutationVariables>;
export const TodosDocument = gql`
    query Todos {
  todo(order_by: {created_at: asc}) {
    id
    title
    is_completed
    created_at
  }
}
    `;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;
export const UpdateTodoByIdDocument = gql`
    mutation updateTodoById($pk_columns: todo_pk_columns_input!, $_set: todo_set_input) {
  update_todo_by_pk(pk_columns: $pk_columns, _set: $_set) {
    id
    is_completed
  }
}
    `;
export type UpdateTodoByIdMutationFn = Apollo.MutationFunction<UpdateTodoByIdMutation, UpdateTodoByIdMutationVariables>;

/**
 * __useUpdateTodoByIdMutation__
 *
 * To run a mutation, you first call `useUpdateTodoByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoByIdMutation, { data, loading, error }] = useUpdateTodoByIdMutation({
 *   variables: {
 *      pk_columns: // value for 'pk_columns'
 *      _set: // value for '_set'
 *   },
 * });
 */
export function useUpdateTodoByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoByIdMutation, UpdateTodoByIdMutationVariables>) {
        return Apollo.useMutation<UpdateTodoByIdMutation, UpdateTodoByIdMutationVariables>(UpdateTodoByIdDocument, baseOptions);
      }
export type UpdateTodoByIdMutationHookResult = ReturnType<typeof useUpdateTodoByIdMutation>;
export type UpdateTodoByIdMutationResult = Apollo.MutationResult<UpdateTodoByIdMutation>;
export type UpdateTodoByIdMutationOptions = Apollo.BaseMutationOptions<UpdateTodoByIdMutation, UpdateTodoByIdMutationVariables>;