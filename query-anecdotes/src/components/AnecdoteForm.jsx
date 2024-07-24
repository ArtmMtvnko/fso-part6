import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query"
import anecdotesService from "../services/anecdotes"

const AnecdoteForm = () => {
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: anecdotesService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
    onError: (error) => console.error(error)
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm