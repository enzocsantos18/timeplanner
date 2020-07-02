
import React, {useEffect, useState} from "react";

import { AddContainer } from "./styles";

import { Input, Form, Select } from "@rocketseat/unform";
import api from '../../services/api'
import * as Yup from "yup";


const schema = Yup.object().shape({
  name: Yup.string().required("O campo nome é obrigatório."),
  category: Yup.string().required("O campo categoria é obrigatório."),

});
function NewProject({ isOpen = false, createProject }) {

  const [categories, setCategories] = useState([]);
  useEffect(() =>{
    getCategories()
  }, [])

  async function getCategories(){
    const response = await api.get('categories');
    
    setCategories(response.data)
  }

  async function handleSubmit({category, name}){
    
    await api.post('projects', {
      name, 
      category_id: category
    })
    createProject();
      

  }

  return (
    <>
      {isOpen ? (
        <AddContainer>
         <h1>Criar projeto</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" label="Nome do projeto" type="text" />
        <Select
        name="category"
        options={categories}
        label="Categoria do projeto:"
      />
        <button type="submit">Cadastrar</button>
      </Form>
        </AddContainer>
      ) : null}
    </>
  );
}

export default NewProject;
