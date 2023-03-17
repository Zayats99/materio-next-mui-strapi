import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const InputErrorMessage = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(-4),
  marginBottom: theme.spacing(2),
  fontSize: '12px',
  color: theme.palette.error.main
}))
