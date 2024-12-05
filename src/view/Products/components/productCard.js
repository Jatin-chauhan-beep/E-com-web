import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../../store/products/productSlice";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = async () => {
    await dispatch(setSelectedProduct(data));
    console.log("Dispatched:", data);
    navigate("/product/details");
  };
  return (
    <Card
      className="max-w-xs shadow-lg rounded-lg border border-gray-200 cursor-pointer"
      onClick={handleNavigate}
    >
      <CardMedia
        component="img"
        height="15"
        image="https://via.placeholder.com/140"
        alt="Product"
        className="object-contain p-4"
      />
      <CardContent>
        <Typography
          variant="caption"
          color="text.secondary"
          className="text-gray-500"
        >
          Product
        </Typography>
        <Typography variant="subtitle1" className="font-bold mt-2">
          {data?.name}
        </Typography>
        <div className="flex items-center mt-2">
          <Rating
            value={Number(data.rating).toFixed(1)}
            readOnly
            size="small"
            className="mr-2"
          />
          <Typography variant="body2" color="text.secondary">
            {Number(data.rating).toFixed(1)}
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
            ₹{data.price}
          </Typography>
        </div>
        {/* <Button
          variant="contained"
          className="bg-green-500 text-white mt-4 rounded-full px-4 py-1"
          fullWidth
        >
          View
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
