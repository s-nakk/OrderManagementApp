import {Order, useGetOrdersQuery} from "../../../graphql/generated/schema";
import {Grid, Typography} from "@mui/material";
import OrderList from "./OrderList";

export default function OrdersDashboard() {
  const {data: ordersData, loading, error} = useGetOrdersQuery();
  if (loading) return <p>Loading...</p>;
  if (error || !ordersData) return <p>Error</p>;

  const orders = ordersData.orders as Order[];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography component={"div"} variant={"h5"} display={"block"} gutterBottom align={"center"}>
          Orders List
        </Typography>
        <Grid item xs={12}>
          <OrderList orders={orders}/>
        </Grid>
      </Grid>
    </Grid>
  );
}