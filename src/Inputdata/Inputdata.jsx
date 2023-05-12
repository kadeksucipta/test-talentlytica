import React, { useReducer, useState } from "react";
import Table from "react-bootstrap/Table";
import "./style.css";
import { Container } from "react-bootstrap";

const Inputdata = () => {
  //mahasisiwa 1
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  //mahasisiwa 2
  const [number5, setNumber5] = useState("");
  const [number6, setNumber6] = useState("");
  const [number7, setNumber7] = useState("");
  const [number8, setNumber8] = useState("");
  //mahasisiwa 3
  const [number9, setNumber9] = useState("");
  const [number10, setNumber10] = useState("");
  const [number11, setNumber11] = useState("");
  const [number12, setNumber12] = useState("");
  //mahasisiwa 4
  const [number13, setNumber13] = useState("");
  const [number14, setNumber14] = useState("");
  const [number15, setNumber15] = useState("");
  const [number16, setNumber16] = useState("");
  //mahasisiwa 5
  const [number17, setNumber17] = useState("");
  const [number18, setNumber18] = useState("");
  const [number19, setNumber19] = useState("");
  const [number20, setNumber20] = useState("");
  //mahasisiwa 6
  const [number21, setNumber21] = useState("");
  const [number22, setNumber22] = useState("");
  const [number23, setNumber23] = useState("");
  const [number24, setNumber24] = useState("");
  //mahasisiwa 7
  const [number25, setNumber25] = useState("");
  const [number26, setNumber26] = useState("");
  const [number27, setNumber27] = useState("");
  const [number28, setNumber28] = useState("");
  //mahasisiwa 8
  const [number29, setNumber29] = useState("");
  const [number30, setNumber30] = useState("");
  const [number31, setNumber31] = useState("");
  const [number32, setNumber32] = useState("");
  //mahasisiwa 9
  const [number33, setNumber33] = useState("");
  const [number34, setNumber34] = useState("");
  const [number35, setNumber35] = useState("");
  const [number36, setNumber36] = useState("");
  //mahasisiwa 10
  const [number37, setNumber37] = useState("");
  const [number38, setNumber38] = useState("");
  const [number39, setNumber39] = useState("");
  const [number40, setNumber40] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    alert(
      `nilai aspek 1 : ${number1}, nilai aspek 2 : ${number2}, nlai aspek 3 : ${number3}, nilai aspek 4 : ${number4}`
    );
  };

  return (
    <React.Fragment>
      <Container>
        <h3 className="judul">Aplikasi penilaian Mahasiswa</h3>
        <div className="center-form">
          <div className="parent-form">
            <form onSubmit={handleClick} className="box-form">
              <span className="label-mahasiswa">Mahasiswa 1</span>
              <input
                onChange={(e) => setNumber1(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber2(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber3(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber4(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
            </form>
          </div>

          <div className="parent-form">
            <form onSubmit={handleClick} className="box-form">
              <span className="label-mahasiswa">Mahasiswa 2</span>
              <input
                onChange={(e) => setNumber5(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber6(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber7(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber8(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
            </form>
          </div>

          <div className="parent-form">
            <form onSubmit={handleClick} className="box-form">
              <span className="label-mahasiswa">Mahasiswa 3</span>
              <input
                onChange={(e) => setNumber9(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber10(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber11(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber12(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
            </form>
          </div>

          <div className="parent-form">
            <form onSubmit={handleClick} className="box-form">
              <span className="label-mahasiswa">Mahasiswa 4</span>
              <input
                onChange={(e) => setNumber13(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber14(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber15(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber16(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
            </form>
          </div>

          <div className="parent-form">
            <form onSubmit={handleClick} className="box-form">
              <span className="label-mahasiswa">Mahasiswa 5</span>
              <input
                onChange={(e) => setNumber17(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber18(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber19(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber20(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
            </form>
          </div>

          <div className="parent-form">
            <form onSubmit={handleClick} className="box-form">
              <span className="label-mahasiswa">Mahasiswa 6</span>
              <input
                onChange={(e) => setNumber21(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber22(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber23(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber24(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
            </form>
          </div>

          <div className="parent-form">
            <form onSubmit={handleClick} className="box-form">
              <span className="label-mahasiswa">Mahasiswa 7</span>
              <input
                onChange={(e) => setNumber25(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber26(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber27(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber28(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
            </form>
          </div>

          <div className="parent-form">
            <form onSubmit={handleClick} className="box-form">
              <span className="label-mahasiswa">Mahasiswa 8</span>
              <input
                onChange={(e) => setNumber29(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber30(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber31(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber32(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
            </form>
          </div>

          <div className="parent-form">
            <form onSubmit={handleClick} className="box-form">
              <span className="label-mahasiswa">Mahasiswa 9</span>
              <input
                onChange={(e) => setNumber33(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber34(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber35(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber36(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
            </form>
          </div>

          <div className="parent-form">
            <form onSubmit={handleClick} className="box-form">
              <span className="label-mahasiswa">Mahasiswa 10</span>
              <input
                onChange={(e) => setNumber37(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber38(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber39(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
              <input
                onChange={(e) => setNumber40(e.target.value)}
                className="kolom"
                type="number"
                placeholder="masukan nilai"
              />
            </form>
          </div>
        </div>

        <Table className="table-mahasiswa" striped bordered hover>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Aspek_penilaian_1</th>
              <th>Aspek_penilaian_2</th>
              <th>Aspek_penilaian_3</th>
              <th>Aspek_penilaian_4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mahasiswa_1</td>
              <td>{number1}</td>
              <td>{number2}</td>
              <td>{number3}</td>
              <td>{number4}</td>
            </tr>
            <tr>
              <td>Mahasiswa_2</td>
              <td>{number5}</td>
              <td>{number6}</td>
              <td>{number7}</td>
              <td>{number8}</td>
            </tr>
            <tr>
              <td>Mahasiswa_3</td>
              <td>{number9}</td>
              <td>{number10}</td>
              <td>{number11}</td>
              <td>{number12}</td>
            </tr>
            <tr>
              <td>Mahasiswa_4</td>
              <td>{number13}</td>
              <td>{number14}</td>
              <td>{number15}</td>
              <td>{number16}</td>
            </tr>
            <tr>
              <td>Mahasiswa_5</td>
              <td>{number17}</td>
              <td>{number18}</td>
              <td>{number19}</td>
              <td>{number20}</td>
            </tr>
            <tr>
              <td>Mahasiswa_6</td>
              <td>{number21}</td>
              <td>{number22}</td>
              <td>{number23}</td>
              <td>{number24}</td>
            </tr>
            <tr>
              <td>Mahasiswa_7</td>
              <td>{number25}</td>
              <td>{number26}</td>
              <td>{number27}</td>
              <td>{number28}</td>
            </tr>
            <tr>
              <td>Mahasiswa_8</td>
              <td>{number29}</td>
              <td>{number30}</td>
              <td>{number31}</td>
              <td>{number32}</td>
            </tr>
            <tr>
              <td>Mahasiswa_9</td>
              <td>{number33}</td>
              <td>{number34}</td>
              <td>{number35}</td>
              <td>{number36}</td>
            </tr>
            <tr>
              <td>Mahasiswa_10</td>
              <td>{number37}</td>
              <td>{number38}</td>
              <td>{number39}</td>
              <td>{number40}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default Inputdata;
