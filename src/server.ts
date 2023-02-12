import { app } from './app'
import { env } from './env'

app.listen({ port: env.PORT }).then(() => {
  console.log('Server is running in http://localhost:3333')
})