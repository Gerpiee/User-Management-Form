import { useContext, useState } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  const [show, setShow] = useState(false); // Bu kısımda Kullanıcı dan input almak için oluşturduğumuz formumuzun görünür/görünmez olması için state oluşturduk ilk durumda görünmüyor
  const handleClose = () => setShow(false); // Bu kısımda formumuz görünmüyor Formda Bulunan Close modal'a Ekliyoruz Tıkladığımızda Görünmeyecek
  const handleShow = () => setShow(true); // Bu kısımda görünüyor Add Employee Butonuna onclick eveti olarak ekliyoruz Tıkladığımızda görünecek

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Kullanıcı Ekleme <b>Formu</b>
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
          <Employee employees={employees} />
        </tbody>
      </table>
      {/*  Modal Oluşturma kısmı */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Kullanıcı Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variat="secondary">
            Çıkış
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;
