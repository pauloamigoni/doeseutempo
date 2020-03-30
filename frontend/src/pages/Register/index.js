import React, { useState } from 'react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css'; // optional styles

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api';


import  './styles.css';

import logoImg from '../../assets/logo.svg'


export default function Register(){

    console.log('aik');
     
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [whatsapp, setWhatsapp] = useState('');
      const [description, setDescription] = useState('');
      const [enderecos, setEnderecos] = useState([{ endereco: "", cep: "", cidade: "", complemento: "", numero: "", uf: "" }]);

      // handle input change
      const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...enderecos];
        list[index][name] = value;
        setEnderecos(list);
      };
    
      // handle click event of the Remove button
      const handleRemoveClick = index => {
        const list = [...enderecos];
        list.splice(index, 1);
        setEnderecos(list);
      };
    
      // handle click event of the Add button
      const handleAddClick = () => {
        setEnderecos([...enderecos, { endereco: "", cep: "", cidade: "", complemento: "", numero: "", uf: "" }]);
      };
    

      const history = useHistory();


    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            description,
            enderecos,
        };

       
        try{
            const response  = await api.post('ongs', data);
            toaster.notify(`Seu ID de acesso é : ${response.data.id}`);
            history.push('/');
        }catch(err){
          //  alert ('Erro no cadastro, tente novamente.');
            toaster.notify('Erro no cadastro, tente novamente.')
          
        }
    }



  
    return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                 <Link className="back-link" to = "/" >
                     <FiArrowLeft size={16} color="#E02041" />
                      Já tenho cadastro 
                 
                 </Link>

            </section>


            <form onSubmit={handleRegister}>

                <input
                placeholder="Nome da ONG"
                value={name}
                onChange={e => setName(e.target.value)}/>

                <input 
                type="email" 
                placeholder="E-mail" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <textarea  
                placeholder="Descrição" 
                value={description}
                onChange={e => setDescription(e.target.value)}
                /> 

                <input 
                placeholder="WhatsApp" 
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)
                }/>


                <h3 style={{ marginTop: 20, marginLeft: 5}} >Endreço(s)</h3>


                { enderecos.map((x, i) => {
        return (
          <div className="box">



            <div className="input-group">
                    

                    <input 
                    placeholder="CEP" style={{ width: 120}} 
                    name="cep"  
                    value={x.cep}
                    onChange={e => handleInputChange(e, i)}
                   />


                    <input 
                    placeholder="Endereço" 
                    name="endereco"  
                    value={x.endereco}
                    onChange={e => handleInputChange(e, i)}
                    />

                    <input 
                    placeholder="N"  style={{ width: 80}} 
                    name="numero"  
                    value={x.numero}
                    onChange={e => handleInputChange(e, i)}
                    />


                </div>


                <div className="input-group">

                    <input 
                    placeholder="Bairro" 
                    name="bairro"  
                    value={x.bairro}
                    onChange={e => handleInputChange(e, i)}
                    />

                    <input 
                    placeholder="Complemento" style={{ width: 140}}
                    name="complemento"  
                    value={x.complemento}
                    onChange={e => handleInputChange(e, i)}
                    />


                    </div>



                <div className="input-group">
                    

                    <input 
                    placeholder="Cidade" 
                    name="cidade"  
                    value={x.cidade}
                    onChange={e => handleInputChange(e, i)}
                   />

                    <input 
                    placeholder="UF" style={{ width: 80}}
                    name="uf"   
                    value={x.uf}
                    onChange={e => handleInputChange(e, i)}
                    />
                  


                </div>




              

                    <div className="btn-box"  >
                    {enderecos.length !== 1 && 
                    <button className="buttonEndRem" onClick={() => handleRemoveClick(i)}> REMOVER ENDERECO </button>}
                    {enderecos.length - 1 === i && <button  className="buttonEndAdd"  onClick={handleAddClick}> ADICIONAR MAIS ENDEREÇO </button>}
                    </div>


               
              



          </div>
        );
      })}



    {/* <div style={{ marginTop: 20 }}>{JSON.stringify(enderecos)} - {JSON.stringify(email)}</div> */}



             <button className="button" type="submit">Cadastrar</button>


            </form>
        </div>
    </div>


      



    )

}
