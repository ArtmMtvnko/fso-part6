import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import anecdotesService from './services/anecdotes'

const App = () => {
  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation({
    mutationFn: anecdotesService.update,
    onSuccess: (updatedAnecdote) => {
      // queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      const anecdoteToChange = anecdotes.find(anecdote => anecdote.id === updatedAnecdote.id)
      anecdoteToChange.votes++
      queryClient.setQueryData(['anecdotes'], anecdotes)
    }
  })

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: anecdotesService.getAll,
    retry: false,
    refetchOnWindowFocus: false
  })

  console.log('Status:', result.status)

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({
      ...anecdote,
      votes: anecdote.votes + 1
    })
  }

  const anecdotes = result.data ?? []

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {result.isError && <h4>anecdote service is not available due to problems in server</h4>}

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
