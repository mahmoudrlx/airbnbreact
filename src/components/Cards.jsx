/** @format */

import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import { Star } from "@mui/icons-material";

const Cards = ({ listOfCards }) => {
  const showCardInfo = (e) => {
    const info = listOfCards.find(
      (item) => item.id === e.currentTarget.attributes["value"].value
    );
    console.log(
      `Location: ${info?.location} \n Description: ${info?.description} \n Reviews: ${info?.reviews} \n Price: $${info?.price}`
    );
  };

  return (
    <Grid
      container
      columnSpacing={{ xs: "auto", md: 4 }}
      rowSpacing={2}
      columns={{ xs: 1, sm: 6, md: 12 }}>
      {listOfCards?.length ? (
        listOfCards.map((card, id) => (
          <Grid item xs={1} sm={3} md={3} key={id}>
            <Card
              sx={{ maxWidth: 345 }}
              value={card?.id}
              onClick={showCardInfo}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image={card?.img}
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: " space-between",
                      }}>
                      <span> {card?.location}</span>
                      <span>
                        {card?.reviews}
                        <Star sx={{ fontSize: 15 }} />
                      </span>
                    </div>
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    <span>{card?.description}</span>
                    <br />
                    <span>{card?.date}</span>
                    <br />
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "black",
                      }}>
                      <b>{`$ ${card?.price} Night`}</b>
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default Cards;
