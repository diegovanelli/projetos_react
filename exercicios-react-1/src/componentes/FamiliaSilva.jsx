import React from 'react'

import Membro from './Membro'

export default props =>
    <div> 
        <Membro nome="Rafael" sobrenome={props.sobrenome} />
        <Membro nome="Salvatore" sobrenome={props.sobrenome} />
        <Membro nome="Keanu" sobrenome={props.sobrenome} />
    </div>