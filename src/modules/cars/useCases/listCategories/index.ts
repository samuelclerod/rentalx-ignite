import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const listCategoryUserCase = new ListCategoriesUseCase(
  CategoriesRepository.getInstance()
);

const listCategoriesController = new ListCategoriesController(
  listCategoryUserCase
);

export { listCategoriesController };
