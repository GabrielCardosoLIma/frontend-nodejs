import React from 'react';
import Contatos from '../../Components/Contatos/Fundoimg/Contatos';
import CorpoContato from '../../Components/Contatos/CorpoContato/Corpo';
import ParteDebaixoCorpo from '../../Components/Contatos/ParteDebaixoCorpo/CorpoBaixo';

const PageContatos = () => {
    return (
        <div>
        <Contatos/>
        <CorpoContato/>
        <ParteDebaixoCorpo/>
        </div>
     );
}
 
export default PageContatos;