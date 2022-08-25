import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { DoctorInterface } from '../../models/doctor';
import { getDoctors } from '../../services/doctor';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const Column = styled.th`
  position: sticky;
  top: 0;
  background-color: black;
  color: #e6e7e8;
  font-size: 15px;
`;
const Td = styled.td`
  border-bottom: 1px solid #dddddd;
  padding: 10px 20px;
  font-size: 14px;
  text-align: center;
`;
const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }

  &:nth-child(odd) {
    background-color: #edeef1;
  }

  &:hover td {
    color: #44b478;
    cursor: pointer;
    background-color: #ffffff;
  }
`;
const Button = styled.button`
  border: none;
  padding: 7px 20px;
  border-radius: 20px;
  background-color: black;
  color: #e6e7e8;
`;
const Show = () => {
    const [doctors, setDoctors] = useState<DoctorInterface[]>([])
    const handleGetDoctors =  async() => {
        const res = await getDoctors()
        setDoctors(res)
    }
    useEffect(() => {
        handleGetDoctors();
    }, [])
    
  return (
    <Table>
    <thead>
      <Tr>
        <Column>Nombre</Column>
        <Column>Primer Apellido</Column>
        <Column>Segundo Apellido</Column>
        <Column>Sexo</Column>
        <Column>Edad</Column>
        <Column>Action</Column>
      </Tr>
    </thead>
    <tbody>
      {doctors.map((v,i) => (
           <Tr key={i}>
           <Td>{v.first_name}</Td>
           <Td>{v.last_name}</Td>
           <Td>{v.mother_last_name}</Td>
           <Td>{v.sex}</Td>
           <Td>{v.age}</Td>
           <Td>
             <Button>Ver</Button>
           </Td>
         </Tr>
      ))}
    </tbody>
  </Table>
  )
}

export default Show