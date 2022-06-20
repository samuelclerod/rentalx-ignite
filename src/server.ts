import express from "express";

import swaggerUI from "swagger-ui-express";

import swaggerFile from "./swagger.json";

import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use("/", routes);

const port = 3333;

app.listen(port, () => console.log(`Server is running on port ${port}!`));
