import { MarkCard, MarkCardText } from '@/elements/CusComponets'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

interface IMoreInterstedCardProps {
    coverCard: string,
    textCard: string,
    markCard: string
    link: string,
}

const MoreInterstedCard: FC<IMoreInterstedCardProps> = ({ coverCard, markCard, textCard, link }) => {
    return (
        <Link href={link}>
            <Box>
                <Box sx={{ position: "relative", height: "150px" }}>
                    <img src={coverCard} alt="" style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "100%", borderRadius: '1rem' }} />
                    <MarkCard >
                        <MarkCardText sx={{ bgcolor: "var(--primary-color)" }}>{markCard}</MarkCardText>
                    </MarkCard>
                </Box>
                <Box sx={{ margin: " 0.75rem   0.5rem" }}>
                    <Typography sx={{
                        fontWeight: "bold", fontSize: "0.90rem", ":hover": {
                            color: "var(--primary-color)"
                        }
                    }}>{textCard}</Typography>
                </Box>
            </Box>
        </Link>
    )
}

export default MoreInterstedCard