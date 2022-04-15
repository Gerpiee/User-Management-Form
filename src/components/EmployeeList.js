import { useContext, useEffect, useState } from "react";
import Employee from "./Employee";
import { Button, Modal, Alert } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import AddForm from "./AddForm";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);

  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const handleShowAlert = () => setShowAlert(true);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleClose();

    return () => {
      handleShowAlert();
    };
  }, [employees]);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Kullanıcı <b>Formu</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success text-white"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Yeni Kullanıcı Ekle</span>
            </Button>
          </div>
        </div>
      </div>

      <Alert show={showAlert} variant="success">
        Liste Başarıyla Güncellendi
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Yaş</th>
            <th>Telefon</th>
            <th>Düzenle/Sil</th>
          </tr>
        </thead>
        <tbody>
          {employees // Bu Kısımda Sıralama Yapıyoruz ?
            .sort((a, b) => (a.name < b.name ? -1 : 1))
            .map((employee) => (
              <tr key={employee.id}>
                <Employee employee={employee} />
              </tr>
            ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Kullanıcı Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Çıkış
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;

// .sort((a,b) => a.name.localeCompare(b.name))

// sort((a,b) => (a.name < b.name ? -1 : 1 ))
