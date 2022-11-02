abstract class DemandFoodAdapter {
  abstract create(demandId: number, foodId: number): Promise<boolean>;
}

export default DemandFoodAdapter;
