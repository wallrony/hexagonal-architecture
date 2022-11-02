import DIContainer from "../DIContainer";
import IAccountService from "../../core/interfaces/services/IAccountService";
import IDemandService from "../../core/interfaces/services/IDemandService";
import IFoodService from "../../core/interfaces/services/IFoodService";
import AccountService from "../../core/services/AccountService";
import DemandService from "../../core/services/DemandService";
import FoodService from "../../core/services/FoodService";
import AccountAPI from "../../infra/api/account";
import DemandAPI from "../../infra/api/demand";
import DemandFoodAPI from "../../infra/api/demandFood";
import FoodAPI from "../../infra/api/food";

class GraphQLDIContainer extends DIContainer {
  getAccountService(): IAccountService {
    return new AccountService(new AccountAPI());
  }
  getFoodService(): IFoodService {
    return new FoodService(new FoodAPI());
  }
  getDemandService(): IDemandService {
    return new DemandService(new DemandAPI(), new DemandFoodAPI());
  }
}

export default GraphQLDIContainer;
