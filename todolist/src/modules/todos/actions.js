import Vue from 'vue'

export async function fetchTodos({ commit }){
    await Vue.axios.get('/todos').then(({ data }) => {
        commit('setTodos',data)
      }).catch(function (error) {
        commit('todosError', error.message);
      }).finally(() => {
          console.log("Petición de fetchTodos finalizo");
      });
}

export async function addTodo({ commit, dispatch }, todo){
    await Vue.axios.post('/todos', {
        id: Date.now(),
        text: todo.text,
        done: false
    }).catch(function (error) {
        commit('todosError', error.message);
      }).finally(() => {
        dispatch('fetchTodos');
        console.log("Petición de addTodo finalizo");
      });
}

export async function updateTodo({ commit }, todo){
    await Vue.axios.put(`/todos/${ todo.id }`, {
        id: todo.id,
        text: todo.text,
        done: todo.done
    }).catch(function (error) {
        commit('todosError', error.message);
    }).finally(() => {
        console.log("Petición de updateTodo finalizo");
    });
}

export async function deleteTodo({ commit, dispatch }, todo){
    await Vue.axios.delete(`/todos/${ todo.id }`)
        .catch(function (error) {
            commit('todosError', error.message);
        }).finally(() => {
            dispatch('fetchTodos');
            console.log("Petición de addTodo finalizo");
        });
}