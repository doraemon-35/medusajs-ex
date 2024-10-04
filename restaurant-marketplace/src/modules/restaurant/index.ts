import Service from "./service";
import { Module } from "@medusajs/framework/utils";

export const RESTAURANT_MODULE = "restaurantModuleService";

export default Module(RESTAURANT_MODULE, {
  service: Service,
});
