import React from 'react'
import ReactDOM from 'react-dom'

//import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

import ComponenteComFuncao from './componentes/ComponenteComFuncao'
import Pai from './componentes/Pai'

import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Familia sobrenome="Pereira Da Silva" >
            <Membro nome="Andre" />
            <Membro nome="Maria" />
            <Membro nome="Jose" />
        </Familia>

        <ComponenteComFuncao />
        <Pai />

        <ComponenteClasse valor="Sou um componente de classe!" />
        <Contador numeroInicial={0}/>
        <Hook />
    </div>    
, elemento)