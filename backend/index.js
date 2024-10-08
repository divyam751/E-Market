const express = require("express");
const { ENDPOINT, PORT, CORS_ORIGIN } = require("./constants");
const { ConnectDB } = require("./config/db");
const cors = require("cors");
const { userRouter } = require("./routes/user.routes");
const { categoryRouter } = require("./routes/category.routes");
const { productRouter } = require("./routes/product.routes");
const { cartRouter } = require("./routes/cart.routes");
const { orderRouter } = require("./routes/order.routes");
const { messageRouter } = require("./routes/message.routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(
  cors({
    origin: CORS_ORIGIN,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

// API Home Route
app.get(`${ENDPOINT}/`, (req, res) => {
  res.status(200).send({ message: "Api home route" });
});

// Other routes
app.use(`${ENDPOINT}/user`, userRouter);
app.use(`${ENDPOINT}/category`, categoryRouter);
app.use(`${ENDPOINT}/product`, productRouter);
app.use(`${ENDPOINT}/cart`, cartRouter);
app.use(`${ENDPOINT}/order`, orderRouter);
app.use(`${ENDPOINT}/message`, messageRouter);

// Error handler
app.use(errorHandler);

// Database connection and server
ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️  Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(`Database connection failed !!! \n ${err.message}`));
