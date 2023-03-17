export type ErrorResponse = {
  error: {
    status: number
    name: string
    message: string
    details: {}
  }
} | null
