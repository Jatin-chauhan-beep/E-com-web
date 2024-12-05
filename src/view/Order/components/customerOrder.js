import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../../store/products/productSlice";

const OrderCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card className="max-w-xs shadow-lg rounded-lg border border-gray-200 cursor-pointer">
      <CardMedia
        component="img"
        height="15"
        image="https://picsum.photos/500/500"
        alt="Product"
        className="object-contain p-4"
      />
      <CardContent>
        <Typography
          variant="caption"
          color="text.secondary"
          className="text-gray-500"
        >
          Ordered Product
        </Typography>
        <Typography variant="subtitle1" className="font-bold mt-2">
          {data?.Product?.name}
        </Typography>
        <div className="flex items-center mt-2">
          <Rating
            value={Number(data?.Product?.rating).toFixed(1)}
            readOnly
            size="small"
            className="mr-2"
          />
          <Typography variant="body2" color="text.secondary">
            {Number(data?.Product?.rating).toFixed(1)}
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary" className="mt-1">
          By{" "}
          <span className="text-green-600 font-medium">
            VI Exports India PVT LTD
          </span>
        </Typography>
        <div className="flex items-center mt-4">
          <Typography variant="h6" className="font-bold text-green-700 mr-2">
            Price ₹{data?.Product?.price}
          </Typography>
          <Typography variant="h6" className="font-bold text-green-700 mr-2">
            Total Amount ₹{data?.Order?.total_amount}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
