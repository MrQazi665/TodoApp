export default {
  auth: {
    user: null,
  },
  loading: {
    isAuthenticating: false,
    isAddingTodo: false,
    isUpdatingTodo: false,
    isFetchingTodos: false,
    isDeletingTodo: false,
  },
  todo: {
    itemId: null,
    todoData: {
      data: null,
      page: 1,
      totalRecords: null,
    },
  },
};
