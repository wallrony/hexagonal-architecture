import IAccountService from "../../core/interfaces/services/IAccountService";
import IDemandService from "../../core/interfaces/services/IDemandService";
import IFoodService from "../../core/interfaces/services/IFoodService";
import AccountService from "../../core/services/AccountService";
import DemandService from "../../core/services/DemandService";
import FoodService from "../../core/services/FoodService";
import AccountPostgresRepository from "../../infra/postgres/account";
import DemandPostgresRepository from "../../infra/postgres/demand";
import DemandFoodPostgresRepository from "../../infra/postgres/demandFood";
import FoodPostgresRepository from "../../infra/postgres/food";
import DIContainer from "../DIContainer";

class APIDIContainer extends DIContainer {
  getAccountService(): IAccountService {
    return new AccountService(new AccountPostgresRepository());
  }
  getFoodService(): IFoodService {
    return new FoodService(new FoodPostgresRepository());
  }
  getDemandService(): IDemandService {
    return new DemandService(
      new DemandPostgresRepository(),
      new DemandFoodPostgresRepository()
    );
  }
}

export default APIDIContainer;
