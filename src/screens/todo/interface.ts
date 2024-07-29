import {Todo} from '../../types';

export interface TodoFormValues {
  title: string;
  description: string;
}

export interface GetListingActionParam {
  params: ListingParam;
  type: string;
}

export interface PostTodoActionParam {
  params: {
    showToast: (type: string, message: string) => void;
    resetForm: () => void;
    todoPayload: Todo;
  };
  type: string;
}

export interface UpdateTodoActionParam {
  params: {
    data: Todo;
    id: number;
    showToast: (type: string, message: string) => void;
  };
  type: string;
}

export interface DeleteTodoActionParam {
  params: number;
  type: string;
}

export interface PaginationInput {
  limit: number;
  page: number;
}
export interface ListingParam extends PaginationInput {
  append?: boolean;
}
