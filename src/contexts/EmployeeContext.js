import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([
    //Bu kısımda parametrelerimizi verdik set ile beraber aşağıda değişiklikleriimizi yapacağız addEmployee methodunda
    {
      id: uuidv4(),
      name: "Thomas",
      lastName: "Hardy",
      age: "25",
      phone: "(171) 555-2222",
    },
    {
      id: uuidv4(),
      name: "Dominique ",
      lastName: "Perrier",
      age: "32",
      phone: "(313) 555-5735",
    },
    {
      id: uuidv4(),
      name: "Maria ",
      lastName: "Anders",
      age: "17",
      phone: "(503) 555-9931",
    },
    {
      id: uuidv4(),
      name: "Fran ",
      lastName: "Wilson",
      age: "54",
      phone: "(204) 619-5731",
    },
    {
      id: uuidv4(),
      name: "Martin ",
      lastName: "Blank",
      age: "43",
      phone: "(480) 631-2097",
    },
  ]);
  //   Yeni Bir Eleman ekliyeceğimiz Fonksiyonu bu kısımda oluşturuyoruz
  const addEmployee = (name, lastName, age, phone) => {
    setEmployees([...employees, { id: uuidv4(), name, lastName, age, phone }]); // Bu kısımda Öncelikle employes in içerisine girdik ve içerisine değerlerimizi tekrar alacağımızı belirttik
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {/* Bu kısımda üst tarafta belirttiğimiz eleman ekleme fonksiyonunu export ediyoruz */}

      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
