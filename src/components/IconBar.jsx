/** @format */

import React, { useState, useEffect } from "react";
import {
  ArrowForwardIosSharp,
  TuneRounded,
  HomeOutlined,
  BeachAccessOutlined,
  ParkOutlined,
  AcUnitOutlined,
  HouseboatOutlined,
  HouseOutlined,
} from "@mui/icons-material";
import { Container } from "@mui/material";
import Modal from "./Modal";
import Cards from "./Cards";
import axios from "axios";

const cardsUrl = "data.json";

const activeStyle = {
  borderBottom: "solid 2px #717171",
  color: "black",
};

const IconBar = () => {
  const [listOfCards, setlistOfCards] = useState([]);
  const [isFiltered, setIsFiltered] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleChange = (e) => {
    setIsFiltered(e.currentTarget.attributes["value"]?.value);
    applyFilter();
  };

  const applyFilter = (data) => {
    setlistOfCards(
      data?.filter((card) => {
        return card.type === isFiltered;
      })
    );
  };

  const getAllCards = () => {
    setIsFiltered("");
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const cardsList = async () => {
      try {
        const response = await axios.get(cardsUrl, {
          signal: controller.signal,
        });
        isMounted && setlistOfCards(response?.data?.data);
        if (isFiltered !== "") {
          applyFilter(response?.data?.data);
        }
      } catch (error) {
        console.log();
      }
    };
    cardsList();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [isFiltered]);

  return (
    <Container maxWidth='xl'>
      <div className='icon-bar'>
        <div
          className='icon-bar-inner'
          onClick={getAllCards}
          style={isFiltered === "" ? activeStyle : {}}>
          <HomeOutlined sx={{ fontSize: 25 }} />
          <span>All</span>
        </div>
        <div
          className='icon-bar-inner'
          value='beach'
          onClick={handleChange}
          style={isFiltered === "beach" ? activeStyle : {}}>
          <BeachAccessOutlined sx={{ fontSize: 25 }} />
          <span>Beach</span>
        </div>
        <div
          className='icon-bar-inner'
          value='park'
          onClick={handleChange}
          style={isFiltered === "park" ? activeStyle : {}}>
          <ParkOutlined sx={{ fontSize: 25 }} />
          <span>Park</span>
        </div>
        <div
          className='icon-bar-inner'
          value='arctic'
          onClick={handleChange}
          style={isFiltered === "arctic" ? activeStyle : {}}>
          <AcUnitOutlined sx={{ fontSize: 25 }} />
          <span>Arctic</span>
        </div>
        <div
          className='icon-bar-inner'
          value='lake'
          onClick={handleChange}
          style={isFiltered === "lake" ? activeStyle : {}}>
          <HouseboatOutlined sx={{ fontSize: 25 }} />
          <span>Lake</span>
        </div>
        <div
          className='icon-bar-inner'
          value='house'
          onClick={handleChange}
          style={isFiltered === "house" ? activeStyle : {}}>
          <HouseOutlined sx={{ fontSize: 25 }} />
          <span>House</span>
        </div>
        <div className='i-right-side'>
          <button>
            <ArrowForwardIosSharp sx={{ fontSize: 12 }} />
          </button>
          <button onClick={handleOpen}>
            <TuneRounded sx={{ fontSize: 15 }} />
            <span>Filters</span>
          </button>
        </div>
      </div>
      <Cards listOfCards={listOfCards} />
      {open && (
        <Modal
          open={open}
          setOpen={setOpen}
          listOfCards={listOfCards}
          setlistOfCards={setlistOfCards}
        />
      )}
    </Container>
  );
};

export default IconBar;
