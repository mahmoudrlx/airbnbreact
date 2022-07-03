/** @format */

import React from "react";
import logo from "../img/airbnblogo.png";
import { Grid, Divider, Container } from "@mui/material";
import { Language, Menu, AccountCircle } from "@mui/icons-material";

const Header = () => {
  return (
    <Container
      maxWidth='xl'
      style={{ height: "80px", display: "flex", alignItems: "center" }}>
      <Grid
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        container>
        <Grid item>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
        </Grid>
        <Grid item>
          <div className='search-bar'>
            <span>Anywhere</span>
            <Divider orientation='vertical' variant='middle' flexItem />
            <span>Any week</span>
            <Divider orientation='vertical' variant='middle' flexItem />
            <button>
              <span>Add guests</span>
              <i
                aria-hidden='true'
                className='search circular inverted link icon'></i>
            </button>
          </div>
        </Grid>
        <Grid item>
          <div className='i-user'>
            <div>
              <a href='#/' style={{ color: "black", fontWeight: "bold" }}>
                Become a Host
              </a>
            </div>

            <div>
              <Language />
            </div>
            <button>
              <Menu />
              <AccountCircle fontSize='large' />
            </button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
