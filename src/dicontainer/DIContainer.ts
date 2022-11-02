import IAccountService from "../core/interfaces/services/IAccountService";
import IDemandService from "../core/interfaces/services/IDemandService";
import IFoodService from "../core/interfaces/services/IFoodService";

abstract class DIContainer {
  abstract getAccountService(): IAccountService;
  abstract getFoodService(): IFoodService;
  abstract getDemandService(): IDemandService;
}

export default DIContainer;
