import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./News.css";

const News = () => {
  return (
    <div style={{ backgroundColor: "#F5F6F7" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ py: 3, textAlign: "center", fontWeight: 500 }}
        >
          MotoGP Blogs{" "}
        </Typography>
        <Grid container spacing={2} sx={{ textAlign: "left" }}>
          <Grid item xs={12} md={4} className="news-design">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://i.ibb.co/GnbHFNz/ccdc3e9d8ef44c54a7eedc469a1c3422.jpg"
                alt="green iguana"
              />
              <CardContent sx={{ height: "155px" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500 }}
                >
                  Energica Eva Ribelle RS review electric/sports
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontWeight: "500" }}
                >
                  Already the hottest electric super naked, the new RS version
                  of the Eva Ribelle delivers acceleration and spec no other
                  electric naked can match – at a price.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#083bef" }}
                  size="small"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} className="news-design">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://i.ibb.co/cbV478X/d5f3559cf3694445a62bfd478dbc3be6.jpg"
                alt="green iguana"
              />
              <CardContent sx={{ height: "155px" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500 }}
                >
                  Yamaha MT-10 Naked (2016) review
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontWeight: "500" }}
                >
                  R1-based roadster is not just probably the best of the
                  Japanese ‘super nakeds’ – it’s right up there with the best of
                  the Europeans, too!
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#083bef" }}
                  size="small"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} className="news-design">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://i.ibb.co/kg0KcXV/c0375c65703949cdb101636611187bd1.jpg"
                alt="green iguana"
              />
              <CardContent sx={{ height: "155px" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500 }}
                >
                  Suzuki GSX-S1000 Naked (2021) review
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontWeight: "500" }}
                >
                  Suzuki’s ‘affordable’, GSX-R-derived super naked gets a total
                  restyle, Euro5 update and improved spec for 2021 – yet is
                  still a bargain price.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#083bef" }}
                  size="small"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default News;
