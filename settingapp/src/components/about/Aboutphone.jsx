import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/mi14.png";
import axios from "axios";
const Aboutphone = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Redmi Note 12 Pro+");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:800/about/phoneName"
        );
        setName(response.data.name);
        // console.log('response for the phone name is ', response)
      } catch (error) {
        console.log("error is found ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="main_container">
      <div className="sub_container">
        <span
          className="btn_top"
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          {"←"}
        </span>
        <h1 className="heading_primary">About Phone check</h1>
        <div className="about1">
          <div className="about_container1">
            <img src={logo} className="about_logo" alt="img" />

            <span className="text_primary">MIUI version</span>
            <span className="text_secondary">MIUI Global</span>
            <span className="text_secondary">14.0.4</span>
          </div>
          <div className="about_container2">
            <button
              className="about_container2_1"
              onClick={() => {
                navigate("/Rename");
              }}
            >
              Device name <br /> <span className="text_secondary">{name}</span>
            </button>
            <button className="about_container2_2">
              <h3>Storage</h3>
              <br />
              <span className="text_secondary">Occupied</span>
              <span className="text_secondary">111.0 GB/256 GB</span>
            </button>
          </div>
        </div>
        <div className="about2">
          <buttton className="setBtn">
            <div className="btnText">
              <h4>MIUI version</h4>
            </div>
            <span className="setArrBtn">MIUI Global 14.0.4</span>
          </buttton>

          <buttton className="setBtn">
            <div className="btnText">
              <h4>Android version</h4>
            </div>
            <span className="setArrBtn"> 13 TRA A.34343343.093</span>
          </buttton>

          <buttton className="setBtn">
            <div className="btnText">
              <h4>Android security update</h4>
            </div>
            <span className="setArrBtn"> 2023-09-01</span>
          </buttton>

          <buttton
            className="setBtn"
            onClick={() => {
              navigate("/details");
            }}
          >
            <div className="btnText">
              <h4>Detailed info and specs</h4>
            </div>
            <span>
              {" "}
              <i class="fa-solid fa-greater-than"></i>
            </span>
          </buttton>
          <hr></hr>

          <buttton
            className="setBtn"
            onClick={() => {
              navigate("/backup");
            }}
          >
            <div className="btnText">
              <h4>Back up and restore</h4>
            </div>
            <span>
              {" "}
              <i class="fa-solid fa-greater-than"></i>
            </span>
          </buttton>

          <buttton
            className="setBtn"
            onClick={() => {
              navigate("/reset");
            }}
          >
            <div className="btnText">
              <h4>Factory reset</h4>
            </div>
            <span>
              {" "}
              <i class="fa-solid fa-greater-than"></i>
            </span>
          </buttton>

          <hr />

          <buttton
            className="setBtn"
            onClick={() => {
              navigate("/certification");
            }}
          >
            <div className="btnText">
              <h4>Certification</h4>
            </div>
            <span>
              {" "}
              <i class="fa-solid fa-greater-than"></i>
            </span>
          </buttton>
        </div>
      </div>
    </div>
  );
};

export default Aboutphone;
