import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => {
      // mutate 호출하면서 넘긴 인수가 매개변수가 됨
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.todo.detail(updatedTodo.id),
      });

      const prevTodo = queryClient.getQueryData<Todo>(
        QUERY_KEYS.todo.detail(updatedTodo.id),
      );

      queryClient.setQueryData<Todo>(
        QUERY_KEYS.todo.detail(updatedTodo.id),
        (prevTodo) => {
          if (!prevTodo) return;
          return {
            ...prevTodo,
            ...updatedTodo,
          };
        },
      );

      return {
        prevTodo,
      };
    },
    onError: (error, variable, context) => {
      // context: onMutate 반환값이 제공됨
      if (context && context.prevTodo) {
        queryClient.setQueryData<Todo>(
          QUERY_KEYS.todo.detail(context.prevTodo.id),
          context.prevTodo,
        );
      }
    },
  });
}
// return useMutation({
//   mutationFn: updateTodo,
//   onMutate: async (updatedTodo) => {
//     await queryClient.cancelQueries({
//       queryKey: QUERY_KEYS.todo.list,
//     });

//     const prevTodos = queryClient.getQueryData<Todo[]>(QUERY_KEYS.todo.list);
//     queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
//       if (!prevTodos) return [];
//       return prevTodos.map((prevTodo) =>
//         prevTodo.id === updatedTodo.id
//           ? { ...prevTodo, ...updatedTodo }
//           : prevTodo,
//       );
//     });

//     return {
//       prevTodos,
//     };
//   },
//   onError: (error, variable, context) => {
//     if (context && context.prevTodos) {
//       queryClient.setQueryData<Todo[]>(
//         QUERY_KEYS.todo.list,
//         context.prevTodos,
//       );
//     }
//   },
//   onSettled: () => {
//     queryClient.invalidateQueries({
//       queryKey: QUERY_KEYS.todo.list,
//     });
//   },
// });
