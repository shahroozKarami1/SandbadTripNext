import { Box, InputBase, InputBaseProps, Typography } from '@mui/material'
import { FC } from 'react'

interface InputEmailAuthProps extends InputBaseProps {
    label: string
}

const InputEmailAuth: FC<InputEmailAuthProps> = ({ label, placeholder, type }) => {
    return (
        <Box display={"flex"} gap={1} flexDirection={"column"} >
            <Typography sx={{ mt: "2rem" }}>{label} :</Typography>
            <InputBase type={type} placeholder={placeholder} sx={{
                border: "1px  solid  #ccc",
                padding: "0.5rem",
                borderRadius: "0.25rem"
            }} />
        </Box>

    )
}

export default InputEmailAuth