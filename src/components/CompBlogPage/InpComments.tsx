import { FC } from 'react'
import { CusInp, CusTextArea } from '@/elements/CusComponets';

interface InpCommentsProps {
    isTextArea: boolean,
    textPlaceholder: string,


}

const InpComments: FC<InpCommentsProps> = ({ isTextArea, textPlaceholder }) => {
    return (
        <>
            {
                isTextArea ? (
                    <CusTextArea minRows={5} cols={50} placeholder={textPlaceholder} />

                ) : (

                    <CusInp label={textPlaceholder} placeholder={textPlaceholder} />
                )
            }

        </>
    )
}

export default InpComments